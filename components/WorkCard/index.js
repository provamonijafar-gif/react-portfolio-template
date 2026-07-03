import React from "react";

const WorkCard = ({ img, name, description, problem, solution, implementation, techStack, learning, impact, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={name || "project image"}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
          loading="lazy"
          decoding="async"
        />
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50 mt-1">
        {description ? description : "Description"}
      </h2>
      {problem && (
        <div className="mt-4 space-y-3">
          <div>
            <h3 className="text-sm font-medium opacity-70 uppercase tracking-wide">Problem</h3>
            <p className="text-sm opacity-50 mt-1 leading-relaxed">{problem}</p>
          </div>
          {solution && (
            <div>
              <h3 className="text-sm font-medium opacity-70 uppercase tracking-wide">Solution</h3>
              <p className="text-sm opacity-50 mt-1 leading-relaxed">{solution}</p>
            </div>
          )}
          {implementation && (
            <div>
              <h3 className="text-sm font-medium opacity-70 uppercase tracking-wide">Implementation</h3>
              <p className="text-sm opacity-50 mt-1 leading-relaxed">{implementation}</p>
            </div>
          )}
          {techStack && techStack.length > 0 && (
            <div>
              <h3 className="text-sm font-medium opacity-70 uppercase tracking-wide">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 opacity-80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          {learning && (
            <div>
              <h3 className="text-sm font-medium opacity-70 uppercase tracking-wide">What I Learned</h3>
              <p className="text-sm opacity-50 mt-1 leading-relaxed">{learning}</p>
            </div>
          )}
          {impact && (
            <div>
              <h3 className="text-sm font-medium opacity-70 uppercase tracking-wide">Impact</h3>
              <p className="text-sm opacity-50 mt-1 leading-relaxed">{impact}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkCard;
