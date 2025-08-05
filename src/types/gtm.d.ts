interface Window {
  dataLayer: Array<{
    event?: string;
    page_path?: string;
    [key: string]: any;
  }>;
}