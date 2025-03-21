function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-5xl md:text-6xl font-bold mb-8 border-b-5 border-black pb-4">
        About Me
      </h1>

      <div className="prose prose-lg max-w-none font-body">
        <p className="text-xl mb-6">
          Welcome to my blog! I'm Harley, a passionate writer and developer
          sharing my thoughts on technology, design, and creativity.
        </p>

        <h2 className="font-heading text-3xl font-bold mt-8 mb-4">
          My Background
        </h2>
        <p className="mb-6">
          I've been working in the tech industry for over 5 years, specializing
          in web development and user experience design. My journey began with a
          curiosity about how things work on the web, which led me to explore
          various technologies and frameworks.
        </p>

        <h2 className="font-heading text-3xl font-bold mt-8 mb-4">
          What I Write About
        </h2>
        <p className="mb-6">On this blog, you'll find articles about:</p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Modern web development techniques</li>
          <li className="mb-2">UI/UX design principles</li>
          <li className="mb-2">Creative coding projects</li>
          <li className="mb-2">Technology trends and reviews</li>
        </ul>

        <h2 className="font-heading text-3xl font-bold mt-8 mb-4">
          Connect With Me
        </h2>
        <p className="mb-6">
          I love connecting with fellow developers and designers. Feel free to
          reach out to me on social media or via email.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
