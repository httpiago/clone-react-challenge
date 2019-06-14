declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }

  /** Properties and children to apply to an element. */
  interface ElementProperties {
    className?: string;
    dangerouslySetInnerHTML?: string;
    ref?: object;
    [name: string]: any;
  }

  /** Represent a virtual element in the DOM. */
  type Element = string | number | false | null | {
    type: string | FunctionComponent;
    props?: ElementProperties;
    children?: Element[] | any[]
  }

  type FunctionComponent = (props: object) => Element
}
