When u gonna make some changes, pls ask me before applying new code to the project and following these conventions:

# Coding convention

1, Formats:

- 2 tabs
- camelCase for functions, variables
- uppercase for const
- no hard/fixed code/texts, create an enum or const if needed.

2, Folder structures

- Below is the folder list (create it inside the lib folder as needed)

  - types folder for interfaces, types

    - When coding, if a type/interface/enum is reusable, please create a dedicated file inside the types folder to store it.

  - utils folder for helper functions
  - component folder for components
    - ui component for buttons, link...
  - service folder for apis, services
  - constants folder for const
  - hooks folder for custom hooks

3, Coding

- Use arrow function
- Split code as much as possible, separate each component for reuse, scale, maintenance
- Using jotai to store, manage global states instead of providers
- Using shadcn for UI component as much as possible
