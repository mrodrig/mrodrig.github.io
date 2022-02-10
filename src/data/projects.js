export default class Projects {
    static npmProjects = [
        {
            name: 'json-2-csv',
            url: 'https://mrodrig.github.io/json-2-csv',
            description: 'I wrote a node module that can convert JSON documents into CSV as well as CSV back to an array of JSON documents. I was inspired to write this due to a project requirement at MITRE that I could not find a good solution for. One of the key features that we needed was to be able to convert JSON documents that had nested documents. Existing modules did not support that functionality, and I wanted to avoid changing our data schema. In my spare time, I developed this module which allows us to easily convert our existing schema into a nicely formatted CSV output. I am hoping to continue to add more functionality to this module and possibly create additional node modules in the future.',
            startDate: 'April 2014'
        },
        {
            name: 'tag-cloud',
            url: 'https://mrodrig.github.io/tag-cloud',
            description: 'I wrote a node module that can generate the necessary HTML to create tag clouds which have become increasingly popular. At the time of creation, there were very few other modules, if any, that provide the same functionality and even fewer which provide the same options. I developed this module after work in order to fulfill a need for a project I was working on during my third Co-op.',
            startDate: 'January 2015'
        },
        {
            name: 'memo-cache',
            url: 'https://mrodrig.github.io/memo-cache',
            description: 'After hearing and experiencing some of the pain points of the current caching modules for NodeJS, I decided to create my own. This module combines both caching and memoization into one module, which is surprisingly rare considering memoization relies heavily on a caching implementation. When programming this, I decided to complete the caching library first, which would allow me to base my memoization functionality off of the caching library that I implemented. This library also implements a least recently used (LRU) algorithm and allows for multiple \'named\' caches inside the same module.',
            startDate: 'March 2015'
        },
        {
            name: 'doc-path',
            url: 'https://mrodrig.github.io/doc-path',
            description: 'I abstracted this part of my json-2-csv module out and eventually decided to spin it off as a separate node module since it was something that I found I was re-writing multiple times.',
            startDate: 'April 2015'
        },
        {
            name: 'updep',
            url: 'https://mrodrig.github.io/updep',
            description: 'As the sole maintainer of multiple Node modules, it is rather time consuming to manually update the package dependencies for each module. In order to automate it, I created this module which contains a script that can manually update all of the dependencies for a package to the latest version.',
            startDate: 'November 2015'
        },
        {
            name: 'objecdiff',
            url: 'https://mrodrig.github.io/objecdiff',
            description: 'This module was designed to provide the ability to identify and process differences between two objects. This is useful not only for testing, but also for identifying when specific attributes of a document change, such as during a nightly load script.',
            startDate: 'June 2016'
        },
        {
            name: 'htpasswd-mgr',
            url: 'https://mrodrig.github.io/htpasswd-mgr',
            description: 'In order to automate the process of managing users for the Admin portion of the signaturelimocompany.com website project, I created this node module which allows for the programmatic manipulation of an .htpasswd file.',
            startDate: 'October 2018'
        },
        {
            name: 'deeks',
            url: 'https://mrodrig.github.io/deeks',
            description: 'This module also contains functionality which originally was part of the json-2-csv module, but was abstracted out in order to provide the same functionality for other modules. Specifically, it generates a list of keys from a single document or a list of documents.',
            startDate: 'November 2018'
        },
        {
            name: '@mrodrig/json-2-csv-cli',
            url: 'https://github.com/mrodrig/json-2-csv-cli',
            description: 'In order to provide a CLI for my json-2-csv module without ballooning the package size of the core package through additional dependencies, I opted to develop the CLI functionality as a separate package which could be installed by users who needed this capability.',
            startDate: 'December 2019'
        },
        {
            name: 'vue-scandit',
            url: 'https://github.com/mrodrig/vue-scandit',
            description: 'A Vue component library that serves as a convenience wrapper for the Scandit Web SDK in order to provide a simpler integration with VueJS.',
            startDate: 'August 2020'
        }
    ];

    static serverProjects = [
        {
            name: 'SignatureLimoCompany.com',
            url: 'https://signaturelimocompany.com',
            description: [
                'Originally developed using AngularJS and the MEAN stack for a REST API on top of a Digital Ocean Droplet which I hardened leveraging multiple technical controls',
                'Rewritten in 2020 using VueJS, Google Cloud Platform/Firebase, and Digital Ocean\'s App Platform to replace the older architecture',
                'New architecture is designed to improve security, user experience, and availability',
                'Averages over 40 client quote inquiries per month',
                'Business closed in 2022 and site was retired'
            ],
            startDate: 'March 2014',
            endDate: 'February 2022'
        }
    ];

    static courseProjects = [
        {
            name: 'Research Project in National Information Security',
            url: 'https://github.com/neu-insure-antiphishing-research-group',
            description: [
                'Developed a new Google Chrome Extension to combat phishing attacks',
                'Analyzed phishing emails, existing technologies, and shortcomings in current technical ' +
                'controls in partnership with the Johns Hopkins Applied Physics Laboratory (APL)'
            ],
            startDate: 'September 2017',
            endDate: 'December 2017'
        }
    ]
}
