# Contract Renderer

This was generated using cursor and then edited for correctness. Typescript vs javascript wasn't specified so I did typescript.

Things I would do given more time:

    * Custom CSS: the document would be better served by a small subset of consistent styles; it was faster to pull in all of tailwind for this exercise
    * Split the ContractNodeRenderer to not have any inline JSX components. It would be cleaner to have this just route the rendering but have the individual components split out for each node type.
    * Tests
