// const contactcardinit = [
//   {
//     title: 'Email',
//     desc: 'help@poope.com'
//   },
//   {
//     title: 'Phone',
//     desc: '+1 21865214'
//   },
//   {
//     title: 'Address',
//     desc: 'Boulevard 2442 Caava, California'
//   },
//   {
//     title: 'Contact us now',
//     button: 'SEND US A MESSAGE'
//   }
// ];

// const helpcenter = [
//   {
//     type: 'arrow',
//     title: 'Terms of service'
//   },
//   {
//     type: 'arrow',
//     title: 'Privacy Policy'
//   },
//   {
//     type: 'arrow',
//     title: 'Cookie use'
//   },
//   {
//     type: 'arrow',
//     title: 'Legal notice'
//   },
//   {
//     type: 'toggle',
//     title: 'Send crash reports',
//     desc: 'Automatically send crash reports'
//   },
//   {
//     type: '1.1',
//     title: 'Version'
//   }
// ];

const securit = [
  {
    type: 'toggle',
    title: 'Security scanner',
    desc: 'Show warning for high-risk transaction'
  },
  {
    type: 'toggle',
    title: 'Passcode'
  },
  {
    type: 'menu',
    title: 'Auto-lock'
  },
  {
    type: 'menu',
    title: 'Lock Method'
  },
  {
    type: 'toggle',
    title: 'Transaction signing',
    desc: 'Ask for aprroval ahead of transactions.'
  }
];

const footer = {
  footerList: [
    {
      title: 'sitemap',
      items: ['What is Poope', 'Buy Poope', 'FAQ']
    },
    {
      title: 'fundation',
      items: ['About', 'Tokenomics', 'Roadmap', 'Community', 'Blog']
    }
  ]
};

const notification = [
  {
    type: 'alert',
    checked: false,
    title: 'Christmas Promo is here now!!',
    content: 'Join the challenge and get $POI up to 2000. Don’t waste any more time. Join now',
    time: '2025/09/16',
    extra: [
      {
        type: 'button',
        title: 'JOIN PROMO'
      }
    ]
  },
  {
    type: 'buy',
    checked: false,
    title: 'You successfully Buy 500 #POI',
    content: 'You have successfully initiated the transaction. Amount will reflect in wallet within 1 hour',
    time: '2025/09/15'
  },
  {
    type: 'exchange',
    checked: true,
    title: 'You successfully swap 500 USDT to My Wallet',
    content: 'You have successfully initiated the transaction. Amount will reflect in wallet within 1 hour',
    time: '2025/09/15'
  },
  {
    type: 'buy',
    checked: true,
    title: 'You successfully Buy 0.000046 BTC',
    content: 'You have successfully initiated the transaction. Amount will reflect in wallet within 1 hour',
    time: '2025/09/15'
  }
];
