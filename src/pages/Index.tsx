import React, { Suspense, lazy } from 'react';
import Header from "../components/Header";

// Importação dinâmica dos componentes
const IndexTela1 = lazy(() => import("../components/LandingPage/IndexTela1"));
const IndexTela2 = lazy(() => import("../components/LandingPage/IndexTela2"));
const IndexTela3 = lazy(() => import("../components/LandingPage/IndexTela3"));
const IndexTela4 = lazy(() => import("../components/LandingPage/IndexTela4"));
const IndexTela5 = lazy(() => import("../components/LandingPage/IndexTela5"));

function Index() {
  return (
    <>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
            <IndexTela1 />
            <IndexTela2 />
            <IndexTela3 />
            <IndexTela4 />
            <IndexTela5 />
        </Suspense>
    </>
  );
}

export default Index;
