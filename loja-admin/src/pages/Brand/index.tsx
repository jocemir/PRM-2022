import { IColumn, Stack } from "@fluentui/react";
import { useState } from "react";
import { PageToolBar } from "../../components/PageToolBar";

export function BrandPage(){

    const [loading, setloading] = useState (true);

    const columns: IColumn[] = {
    }

    function handleNew(){

    }

    return(
        <div id="brand-page" className="main-content">
            <Stack horizontal={false}>
                <PageToolBar
                    currentPageTitle="Marcas"
                    loading={loading}
                    onNew={ handleNew} />

                    <div className="">


                    </div>

            </Stack>
        </div>
    )
}

