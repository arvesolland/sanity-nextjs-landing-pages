export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '623cd44a68cd523c51f68b93',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pft9r23t',
                  apiId: '6562ab78-7a6e-4891-b31d-52e7a378cb53'
                },
                {
                  buildHookId: '623cd44a1f9be8420b9a7175',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bmas94cj',
                  apiId: '242702d7-ed06-4d88-bb59-73a4a2d5dea3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arvesolland/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bmas94cj.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
