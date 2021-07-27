export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'ericganderson/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61003156b29a4645aa9c9472',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-ocu843ca',
                  apiId: '154eca5d-1ef3-42c6-a8d8-2278245a1a58'
                },
                {
                  buildHookId: '610031563d3997420e112c61',
                  title: 'Website',
                  name: 'sanity-angular-website-web-921ptaix',
                  apiId: '834f69ea-0894-4d7c-91e6-91bbc05fdf3c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ericganderson/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-921ptaix.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
