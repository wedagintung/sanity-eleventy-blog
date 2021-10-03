export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '615982452a210f1300bd7a8d',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-5rws9f2z',
                  apiId: 'e56010ef-ca8d-4082-81e1-2f93e0863441'
                },
                {
                  buildHookId: '61598245bb94171857d9e5ba',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-8omgndvw',
                  apiId: 'd5990355-3686-4a86-97b8-8b65a7565316'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wedagintung/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-8omgndvw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
