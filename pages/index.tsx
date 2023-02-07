import { Button, Htag } from "@/components";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h3">Volosova</Htag>
      <Button appearance="primary">button</Button>
      <Button appearance="ghost">button</Button>
    </>
  );
}
