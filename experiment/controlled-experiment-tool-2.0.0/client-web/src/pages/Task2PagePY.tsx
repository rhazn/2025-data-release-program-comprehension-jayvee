import { FC, useState } from "react";
import { useNavigate } from "react-router";

interface Task2PagePYProps {}

export const Task2PagePY: FC<Task2PagePYProps> = ({}: Task2PagePYProps) => {
    const [input, setInput] = useState<string>("");
    const [status, setStatus] = useState<"error" | "undecided" | "correct">(
        "undecided"
    );
    const navigate = useNavigate();

    const checkSolution = () => {
        const correctSolutions = ["3:7,:", "3:7, :", "3:7,0:11", "3:7, 0:11"];

        if (!input || status === "correct") {
            return;
        }
        if (correctSolutions.includes(input.trim().toLocaleLowerCase())) {
            setStatus("correct");
            return;
        }
        setStatus("error");
    };

    return (
        <>
            <h1 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                Task 1
            </h1>
            <p className="mb-4 font-light">
                Please complete the data pipeline on the right to select the
                subset of data that is highlighted in{" "}
                <p className="inline">blue</p>.
            </p>
            <div className="flex flex-row flex-nowrap mb-4">
                <div className="flex flex-1 justify-center self-start">
                    <table className="border border-solid border-black p-2 border-collapse">
                        {false && (
                            <thead>
                                <tr className="border border-solid border-black p-1">
                                    <td className="border border-solid border-black p-1">
                                        name
                                    </td>
                                    <td className="border border-solid border-black p-1">
                                        mpg
                                    </td>
                                    <td className="border border-solid border-black p-1">
                                        cyl
                                    </td>
                                    <td className="border border-solid border-black p-1">
                                        disp
                                    </td>
                                    <td className="border border-solid border-black p-1">
                                        hp
                                    </td>
                                    <td className="border border-solid border-black p-1">
                                        drat
                                    </td>
                                    <td className="border border-solid border-black p-1">
                                        wt
                                    </td>
                                    <td className="border border-solid border-black p-1">
                                        qsec
                                    </td>
                                    <td className="border border-solid border-black p-1">
                                        vs
                                    </td>
                                    <td className="border border-solid border-black p-1">
                                        am
                                    </td>
                                    <td className="border border-solid border-black p-1">
                                        gear
                                    </td>
                                    <td className="border border-solid border-black p-1">
                                        carb
                                    </td>
                                </tr>
                            </thead>
                        )}
                        <tbody>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Mazda RX4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    21
                                </td>
                                <td className="border border-solid border-black p-1">
                                    6
                                </td>
                                <td className="border border-solid border-black p-1">
                                    160
                                </td>
                                <td className="border border-solid border-black p-1">
                                    110
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.9
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2.62
                                </td>
                                <td className="border border-solid border-black p-1">
                                    16.46
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Mazda RX4 Wag
                                </td>
                                <td className="border border-solid border-black p-1">
                                    21
                                </td>
                                <td className="border border-solid border-black p-1">
                                    6
                                </td>
                                <td className="border border-solid border-black p-1">
                                    160
                                </td>
                                <td className="border border-solid border-black p-1">
                                    110
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.9
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2.875
                                </td>
                                <td className="border border-solid border-black p-1">
                                    17.02
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Datsun 710
                                </td>
                                <td className="border border-solid border-black p-1">
                                    22.8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    108
                                </td>
                                <td className="border border-solid border-black p-1">
                                    93
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.85
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2.32
                                </td>
                                <td className="border border-solid border-black p-1">
                                    18.61
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                            </tr>
                            <tr className="bg-blue-100">
                                <td className="border border-solid border-black p-1">
                                    Hornet 4 Drive
                                </td>
                                <td className="border border-solid border-black p-1">
                                    21.4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    6
                                </td>
                                <td className="border border-solid border-black p-1">
                                    258
                                </td>
                                <td className="border border-solid border-black p-1">
                                    110
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.08
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.215
                                </td>
                                <td className="border border-solid border-black p-1">
                                    19.44
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                            </tr>
                            <tr className="bg-blue-100">
                                <td className="border border-solid border-black p-1">
                                    Hornet Sportabout
                                </td>
                                <td className="border border-solid border-black p-1">
                                    18.7
                                </td>
                                <td className="border border-solid border-black p-1">
                                    8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    360
                                </td>
                                <td className="border border-solid border-black p-1">
                                    175
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.15
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.44
                                </td>
                                <td className="border border-solid border-black p-1">
                                    17.02
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2
                                </td>
                            </tr>
                            <tr className="bg-blue-100">
                                <td className="border border-solid border-black p-1">
                                    Valiant
                                </td>
                                <td className="border border-solid border-black p-1">
                                    18.1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    6
                                </td>
                                <td className="border border-solid border-black p-1">
                                    225
                                </td>
                                <td className="border border-solid border-black p-1">
                                    105
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2.76
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.46
                                </td>
                                <td className="border border-solid border-black p-1">
                                    20.22
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                            </tr>
                            <tr className="bg-blue-100">
                                <td className="border border-solid border-black p-1">
                                    Duster 360
                                </td>
                                <td className="border border-solid border-black p-1">
                                    14.3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    360
                                </td>
                                <td className="border border-solid border-black p-1">
                                    245
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.21
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.57
                                </td>
                                <td className="border border-solid border-black p-1">
                                    15.84
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                            </tr>
                            <tr className="bg-blue-100">
                                <td className="border border-solid border-black p-1">
                                    Merc 240D
                                </td>
                                <td className="border border-solid border-black p-1">
                                    24.4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    146.7
                                </td>
                                <td className="border border-solid border-black p-1">
                                    62
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.69
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.19
                                </td>
                                <td className="border border-solid border-black p-1">
                                    20
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Merc 230
                                </td>
                                <td className="border border-solid border-black p-1">
                                    22.8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    140.8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    95
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.92
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.15
                                </td>
                                <td className="border border-solid border-black p-1">
                                    22.9
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Merc 280
                                </td>
                                <td className="border border-solid border-black p-1">
                                    19.2
                                </td>
                                <td className="border border-solid border-black p-1">
                                    6
                                </td>
                                <td className="border border-solid border-black p-1">
                                    167.6
                                </td>
                                <td className="border border-solid border-black p-1">
                                    123
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.92
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.44
                                </td>
                                <td className="border border-solid border-black p-1">
                                    18.3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Merc 280C
                                </td>
                                <td className="border border-solid border-black p-1">
                                    17.8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    6
                                </td>
                                <td className="border border-solid border-black p-1">
                                    167.6
                                </td>
                                <td className="border border-solid border-black p-1">
                                    123
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.92
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.44
                                </td>
                                <td className="border border-solid border-black p-1">
                                    18.9
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Merc 450SE
                                </td>
                                <td className="border border-solid border-black p-1">
                                    16.4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    275.8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    180
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.07
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4.07
                                </td>
                                <td className="border border-solid border-black p-1">
                                    17.4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Merc 450SL
                                </td>
                                <td className="border border-solid border-black p-1">
                                    17.3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    275.8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    180
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.07
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.73
                                </td>
                                <td className="border border-solid border-black p-1">
                                    17.6
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Merc 450SLC
                                </td>
                                <td className="border border-solid border-black p-1">
                                    15.2
                                </td>
                                <td className="border border-solid border-black p-1">
                                    8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    275.8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    180
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.07
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.78
                                </td>
                                <td className="border border-solid border-black p-1">
                                    18
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Cadillac Fleetwood
                                </td>
                                <td className="border border-solid border-black p-1">
                                    10.4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    472
                                </td>
                                <td className="border border-solid border-black p-1">
                                    205
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2.93
                                </td>
                                <td className="border border-solid border-black p-1">
                                    5.25
                                </td>
                                <td className="border border-solid border-black p-1">
                                    17.98
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Lincoln Continental
                                </td>
                                <td className="border border-solid border-black p-1">
                                    10.4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    460
                                </td>
                                <td className="border border-solid border-black p-1">
                                    215
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    5.424
                                </td>
                                <td className="border border-solid border-black p-1">
                                    17.82
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Chrysler Imperial
                                </td>
                                <td className="border border-solid border-black p-1">
                                    14.7
                                </td>
                                <td className="border border-solid border-black p-1">
                                    8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    440
                                </td>
                                <td className="border border-solid border-black p-1">
                                    230
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.23
                                </td>
                                <td className="border border-solid border-black p-1">
                                    5.345
                                </td>
                                <td className="border border-solid border-black p-1">
                                    17.42
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Fiat 128
                                </td>
                                <td className="border border-solid border-black p-1">
                                    32.4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    78.7
                                </td>
                                <td className="border border-solid border-black p-1">
                                    66
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4.08
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2.2
                                </td>
                                <td className="border border-solid border-black p-1">
                                    19.47
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Honda Civic
                                </td>
                                <td className="border border-solid border-black p-1">
                                    30.4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    75.7
                                </td>
                                <td className="border border-solid border-black p-1">
                                    52
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4.93
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1.615
                                </td>
                                <td className="border border-solid border-black p-1">
                                    18.52
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Toyota Corolla
                                </td>
                                <td className="border border-solid border-black p-1">
                                    33.9
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    71.1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    65
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4.22
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1.835
                                </td>
                                <td className="border border-solid border-black p-1">
                                    19.9
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Toyota Corona
                                </td>
                                <td className="border border-solid border-black p-1">
                                    21.5
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    120.1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    97
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.7
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2.465
                                </td>
                                <td className="border border-solid border-black p-1">
                                    20.01
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Dodge Challenger
                                </td>
                                <td className="border border-solid border-black p-1">
                                    15.5
                                </td>
                                <td className="border border-solid border-black p-1">
                                    8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    318
                                </td>
                                <td className="border border-solid border-black p-1">
                                    150
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2.76
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.52
                                </td>
                                <td className="border border-solid border-black p-1">
                                    16.87
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    AMC Javelin
                                </td>
                                <td className="border border-solid border-black p-1">
                                    15.2
                                </td>
                                <td className="border border-solid border-black p-1">
                                    8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    304
                                </td>
                                <td className="border border-solid border-black p-1">
                                    150
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.15
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.435
                                </td>
                                <td className="border border-solid border-black p-1">
                                    17.3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Camaro Z28
                                </td>
                                <td className="border border-solid border-black p-1">
                                    13.3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    350
                                </td>
                                <td className="border border-solid border-black p-1">
                                    245
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.73
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.84
                                </td>
                                <td className="border border-solid border-black p-1">
                                    15.41
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Pontiac Firebird
                                </td>
                                <td className="border border-solid border-black p-1">
                                    19.2
                                </td>
                                <td className="border border-solid border-black p-1">
                                    8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    400
                                </td>
                                <td className="border border-solid border-black p-1">
                                    175
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.08
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.845
                                </td>
                                <td className="border border-solid border-black p-1">
                                    17.05
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Fiat X1-9
                                </td>
                                <td className="border border-solid border-black p-1">
                                    27.3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    79
                                </td>
                                <td className="border border-solid border-black p-1">
                                    66
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4.08
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1.935
                                </td>
                                <td className="border border-solid border-black p-1">
                                    18.9
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Porsche 914-2
                                </td>
                                <td className="border border-solid border-black p-1">
                                    26
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    120.3
                                </td>
                                <td className="border border-solid border-black p-1">
                                    91
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4.43
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2.14
                                </td>
                                <td className="border border-solid border-black p-1">
                                    16.7
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    5
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Lotus Europa
                                </td>
                                <td className="border border-solid border-black p-1">
                                    30.4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    95.1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    113
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.77
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1.513
                                </td>
                                <td className="border border-solid border-black p-1">
                                    16.9
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    5
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Ford Pantera L
                                </td>
                                <td className="border border-solid border-black p-1">
                                    15.8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    351
                                </td>
                                <td className="border border-solid border-black p-1">
                                    264
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4.22
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.17
                                </td>
                                <td className="border border-solid border-black p-1">
                                    14.5
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    5
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Ferrari Dino
                                </td>
                                <td className="border border-solid border-black p-1">
                                    19.7
                                </td>
                                <td className="border border-solid border-black p-1">
                                    6
                                </td>
                                <td className="border border-solid border-black p-1">
                                    145
                                </td>
                                <td className="border border-solid border-black p-1">
                                    175
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.62
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2.77
                                </td>
                                <td className="border border-solid border-black p-1">
                                    15.5
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    5
                                </td>
                                <td className="border border-solid border-black p-1">
                                    6
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Maserati Bora
                                </td>
                                <td className="border border-solid border-black p-1">
                                    15
                                </td>
                                <td className="border border-solid border-black p-1">
                                    8
                                </td>
                                <td className="border border-solid border-black p-1">
                                    301
                                </td>
                                <td className="border border-solid border-black p-1">
                                    335
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.54
                                </td>
                                <td className="border border-solid border-black p-1">
                                    3.57
                                </td>
                                <td className="border border-solid border-black p-1">
                                    14.6
                                </td>
                                <td className="border border-solid border-black p-1">
                                    0
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    5
                                </td>
                                <td className="border border-solid border-black p-1">
                                    8
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-black p-1">
                                    Volvo 142E
                                </td>
                                <td className="border border-solid border-black p-1">
                                    21.4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    121
                                </td>
                                <td className="border border-solid border-black p-1">
                                    109
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4.11
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2.78
                                </td>
                                <td className="border border-solid border-black p-1">
                                    18.6
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    1
                                </td>
                                <td className="border border-solid border-black p-1">
                                    4
                                </td>
                                <td className="border border-solid border-black p-1">
                                    2
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex-1 align-left sticky self-start top-8">
                    <pre className="text-left">dataFrame =</pre>
                    <br />
                    <div className="flex flex-row flex-nowrap items-baseline">
                        <pre>&nbsp;&nbsp;&nbsp;&nbsp;dataFrame.iloc[</pre>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                        />
                        <pre>]</pre>
                    </div>
                </div>
            </div>
            {status === "error" && (
                <div className="bg-red-100 p-2 m-2">
                    The solution is not correct, please try again.
                </div>
            )}
            {status === "correct" && (
                <div className="bg-green-100 p-2 m-2">
                    The solution is correct, please continue.
                </div>
            )}
            <button
                type="button"
                disabled={!input || status === "correct"}
                onClick={() => checkSolution()}
                className="text-white disabled:bg-gray-400 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                Check Solution
            </button>
            <br />
            {status === "correct" && (
                <button
                    type="button"
                    disabled={status !== "correct"}
                    onClick={() => navigate("/end")}
                    className="text-white disabled:bg-gray-400 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Continue
                </button>
            )}
        </>
    );
};
