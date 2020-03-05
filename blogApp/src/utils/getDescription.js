import parseHtmlTextContent from "parse-html-text-content";

const getDescription = (html) => {
  const description = parseHtmlTextContent(html);
  return description.length > 100 ? `${description.substring(0, 100)}...` : description;
};

export default getDescription;
