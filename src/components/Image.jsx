function Image({
  src = "./image.jpg",
  alt = "Click Me!",
  style = {},
  className = "image",
  id,
  key,
}) {
  return (
    <img alt={alt} src={src} className={className} id={id} style={style} />
  );
}

export default Image;
