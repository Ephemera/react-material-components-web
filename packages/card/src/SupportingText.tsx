import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__supporting-text`;

export type MetaProps = {
    className?: string,
};

export type ChildProps = {
    className?: string,
};

/**
 * Supporting text section component
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }
}

export default class SupportingText extends DefaultComponentBase<React.HTMLProps<HTMLElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            "className",
        ];
    }

    protected getChildComponent() {
        return "section";
    }
}
