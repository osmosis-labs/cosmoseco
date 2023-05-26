// Purpose:
//   to get the Cosmos Eco Project data from AirTable


import fetch from 'node-fetch';
import * as fs from 'fs';

const outputFilePath = "./projects.json";
const imagesDirectory = './images';

const air_table_url = 'https://api.airtable.com/v0/appWoI7NdLmgK8Vyx/Cosmos%20Eco?view=Grid%20view';
const air_table_token = process.env.AIRTABLE_TOKEN;
const air_table_header = {
    headers: {
    'Authorization': `Bearer ${air_table_token}`
    }
}

let air_table_data;
let git_hub_data = [];
let git_hub_data_map;
let projects;

async function get_air_table_data() {

    try {
        const response = await fetch(air_table_url, air_table_header);
        const data = await response.json();
        air_table_data = data;
    } catch (error) {
        console.error(error);
    }
}

async function fetch_data(url, header) {

    try {
        const response = await fetch(url, header);
        const data = await response.json();
        //console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function get_image(url, name) {
    
    const filePath = `${imagesDirectory}/${name}`;

    try {
        const response = await fetch(url);
        const dest = fs.createWriteStream(filePath);
        response.body.pipe(dest);
    } catch (error) {
        console.error(error);
    }

}

function readJsonFile(file) {
  try {
    return JSON.parse(fs.readFileSync(file));
  } catch (err) {
    console.log(err);
  }
}

function writeJsonFile(file, object) {
  try {
    fs.writeFileSync((file), JSON.stringify(object,null,2), (err) => {
      if (err) throw err;
    });
  } catch (err) {
    console.log(err);
  }
}

function process_git_hub_data() {
    
    console.log("Processing GitHub Data");

    git_hub_data_map = new Map();
    git_hub_data.projects.forEach((project) => {
        if (project["Project Name"]) {
            git_hub_data_map.set(project["Project Name"], project);
        }
    });


}

function process_air_table_data() {

    console.log("Processing AirTable Data");

    const currentDateTime = new Date();
    git_hub_data = [];
    const git_hub_image_url_start = "https://raw.githubusercontent.com/osmosis-labs/cosmoseco/main/images/";

    if(!air_table_data) {console.log("No data");}
    air_table_data.records.forEach((record) => {

        if(record.fields.Status != 'Active'/* || !record.fields.Publish*/) {return}

        let git_hub_project = git_hub_data_map.get(record.fields["Project Name"]);

        // -- INITIALIZE PROJECT OBJECT --
        let project = {
            internal_data: {
                image_sizes: {},
                project_listing_date: null
            }
        };


        project.internal_data.project_listing_date = git_hub_project?.internal_data?.project_listing_date ?? currentDateTime;


        // -- COPY RECORD PROPERTIES TO PROJECT --
        Object.entries(record.fields).forEach(([key,value]) => {
            if (Array.isArray(value)) {
                if (value[0].type?.includes("image")) {
                    if (value[0].size === git_hub_project?.internal_data?.image_sizes?.[key]) {
                        project.internal_data.image_sizes[key] = git_hub_project.internal_data.image_sizes[key];
                    } else {
                        project.internal_data.image_sizes[key] = value[0].size;
                    }
                    let image_title = record.fields["Project Name"] + ' ' + key + '.webp';
                    let image_name = image_title.toLowerCase().replace(/\s/g, '_');
                    project[key + " URL"] = git_hub_image_url_start + image_name;
                    get_image(value[0].url,image_name);
                } else {
                    project[key] = value[0];
                }
            } else {
                project[key] = value;
            }
        });

        console.log(project);

        git_hub_data.push(project);
        


    });

    projects = {
        projects: git_hub_data
    };

}

async function main() {
    
    git_hub_data = readJsonFile(outputFilePath);
    process_git_hub_data();
    air_table_data = await fetch_data(air_table_url, air_table_header);
    process_air_table_data();
    writeJsonFile(outputFilePath, projects);

}

main();
