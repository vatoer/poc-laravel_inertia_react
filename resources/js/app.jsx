import './bootstrap';
import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from '@/Layouts/Layout';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    console.log('Pages:', pages); // Add this line
    console.log('Resolving page:', name); // Add this line
    let page = pages[`./Pages/${name}.jsx`]
    if (!page) {
      console.error(`Page not found: ./Pages/${name}.jsx`); // Add this line
    }
    page.default.layout = page.default.layout || ((page)=> Layout({children: page}))
    return page
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },

  progress: {
   color: '#f00',
  }
})