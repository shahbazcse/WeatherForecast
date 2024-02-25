import React, { useState } from "react";

import { Slider } from "../components/ui/slider";
import { cn } from "../lib/utils";

const TemperatureRange = ({
    className,
    onValueChange,
    value,
    min,
    max,
    ...props
}) => {
    const initialValue = Array.isArray(value) ? value : [min, max];
    const [localValues, setLocalValues] = useState(initialValue);

    const handleValueChange = (newValues) => {
        setLocalValues(newValues);
        if (onValueChange) {
            onValueChange(newValues);
        }
    };

    return (
        <Slider
            min={min}
            max={max}
            value={localValues}
            onValueChange={handleValueChange}
            disabled={true}
            className={cn(
                "relative flex w-full max-w-[17rem] touch-none select-none items-center md:max-w-[8rem]",
                className
            )}
            {...props}
        />
    );
};

export default TemperatureRange;
