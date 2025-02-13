interface Props {
    title: string;
    description: string;
    imageUrl: string;
    pageUrl:  string;
  }

const MetaComponent = ({title, description, imageUrl, pageUrl}: Props) => {
    return (
        <head>
          
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta property="twitter:url" content={pageUrl}/>
        <meta property="twitter:domain" content="emotionalsobrietycoaching.com"/>
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f1c4c4" />
        <meta name="msapplication-TileColor" content="#46474c" />
        <meta name="theme-color" content="#fff8f7" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
    )
}
export default MetaComponent