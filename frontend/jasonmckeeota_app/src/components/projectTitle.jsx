function ProjectTitle({data}) {
  return (
    <div>
      <h1>
        <img
          src={data.picture}
          alt="picture"
          class="fluid"
          style={{ height: "100px" }}
        />
        {data.title}
      </h1>
    </div>
  );
}

export default ProjectTitle;
