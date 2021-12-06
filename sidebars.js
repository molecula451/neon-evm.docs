/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure.
  // If you generate a sitebar automatically, you need to run the following command:
//  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  tutorialSidebar: [
    {
      type: 'category',
      label: 'About',
      items:
      [
        'intro',
        'getting_started',
        'glossary',
      ],
    },

    {
      type: 'category',
      label: 'Architecture',
      items:
      [
        'architecture/eth_sol_solution',
        'architecture/neon_evm_arch',
        'architecture/value_token',
      ],
    },

    {
      type: 'category',
      label: 'Devportal',
      items:
      [
        'devportal/metamask_setup',
        'devportal/bpf_trace',
        'devportal/using_truffle',
        'devportal/deploy_contract_via_remix',
      ],
    },
    {
      type: 'category',
      label: 'Local Solana Cluster',
      items:
      [
        'solana_cluster/cluster_installation',
      ],
    },
    {
      type: 'category',
      label: 'NeonSwap',
      items:
      [
        'neonswap/neonswap_overview',
//        'neonswap/neonswap',
        'neonswap/neonswap_tests',
//        'neonswap/solana_neonswap',
      ],
    },
    {
      type: 'category',
      label: 'Neon Proxy',
      items:
      [
        'proxy/url_table',
        'proxy/connect_to_solana_via_proxy',
        'proxy/operator_guide',
        'proxy/choosing_proxy',
      ],
    },
    {
      type: 'category',
      label: 'Supported Standards',
      items:
      [
        'supported_standards/standards_overview',
        'supported_standards/erc20wrapper',
      ],
    },
    {
      type: 'category',
      label: 'Software Manuals',
      items:
      [
        {
          type: 'category',
          label: 'Core aspects',
          items: 
          [
            'software_manuals/foundational_topics/web3',
            'software_manuals/foundational_topics/account',
            'software_manuals/foundational_topics/transaction',
            'software_manuals/foundational_topics/block',
            'software_manuals/foundational_topics/gas',
            'software_manuals/foundational_topics/proof-of-work',
            'software_manuals/foundational_topics/proof-of-stake',
            'software_manuals/foundational_topics/solana-cluster',
          ],
        },
        {
          type: 'category',
          label: 'How to guides',
          items: 
          [
            'software_manuals/how_to_guides/deploy_contract',
            'software_manuals/how_to_guides/connect_metamask_to_solana',
            'software_manuals/how_to_guides/support_docs',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Design Proposals',
      items: 
      [
        {
          type: 'category',
          label: 'Implemented',
          items: 
          [
            'design_proposals/implemented/implemented_proposals',
          ],
        },
        {
          type: 'category',
          label: 'Accepted',
          items:
          [
            'design_proposals/accepted/accepted_proposals',
            'design_proposals/accepted/restriction_on_iterative_trx',
            'design_proposals/accepted/spl_token_precision',
            'design_proposals/accepted/erc721-tokens',
            'design_proposals/accepted/precompiled_contracts',
            'design_proposals/accepted/gas_calculator',
            'design_proposals/accepted/unsupported_functions',
            'design_proposals/accepted/storage_size_for_account',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Neon FAQ',
      items: 
      [
        'faq/neon-faq',
      ],
    },

  ],
};
