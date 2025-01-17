// 通过签名分发NFT白名单流程：
//
//    在服务器保管signer钱包的私钥-公钥对
// -> 在服务器记录allowlist（白名单地址）和tokenId，并生成对应的msgHash，
// -> 用signer钱包给msgHash签名
// -> 部署NFT合约，初始化时signer的公钥保存在合约中。
// -> 用户mint时填地址和tokenId，并向服务器请求签名。
// -> 调用合约的mint()函数进行铸造

import { ethers, utils } from "ethers";

const contractJson = {
    "generatedSources": [
    {
        "ast": {
            "nodeType": "YulBlock",
            "src": "0:3933:8",
            "statements": [
                {
                    "body": {
                        "nodeType": "YulBlock",
                        "src": "102:259:8",
                        "statements": [
                            {
                                "nodeType": "YulAssignment",
                                "src": "112:75:8",
                                "value": {
                                    "arguments": [
                                        {
                                            "arguments": [
                                                {
                                                    "name": "length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "179:6:8"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "array_allocation_size_t_string_memory_ptr",
                                                "nodeType": "YulIdentifier",
                                                "src": "137:41:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "137:49:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "allocate_memory",
                                        "nodeType": "YulIdentifier",
                                        "src": "121:15:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "121:66:8"
                                },
                                "variableNames": [
                                    {
                                        "name": "array",
                                        "nodeType": "YulIdentifier",
                                        "src": "112:5:8"
                                    }
                                ]
                            },
                            {
                                "expression": {
                                    "arguments": [
                                        {
                                            "name": "array",
                                            "nodeType": "YulIdentifier",
                                            "src": "203:5:8"
                                        },
                                        {
                                            "name": "length",
                                            "nodeType": "YulIdentifier",
                                            "src": "210:6:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "mstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "196:6:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "196:21:8"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "196:21:8"
                            },
                            {
                                "nodeType": "YulVariableDeclaration",
                                "src": "226:27:8",
                                "value": {
                                    "arguments": [
                                        {
                                            "name": "array",
                                            "nodeType": "YulIdentifier",
                                            "src": "241:5:8"
                                        },
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "248:4:8",
                                            "type": "",
                                            "value": "0x20"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "237:3:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "237:16:8"
                                },
                                "variables": [
                                    {
                                        "name": "dst",
                                        "nodeType": "YulTypedName",
                                        "src": "230:3:8",
                                        "type": ""
                                    }
                                ]
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "291:16:8",
                                    "statements": [
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "300:1:8",
                                                        "type": "",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "303:1:8",
                                                        "type": "",
                                                        "value": "0"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "revert",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "293:6:8"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "293:12:8"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "293:12:8"
                                        }
                                    ]
                                },
                                "condition": {
                                    "arguments": [
                                        {
                                            "arguments": [
                                                {
                                                    "name": "src",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "272:3:8"
                                                },
                                                {
                                                    "name": "length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "277:6:8"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "268:3:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "268:16:8"
                                        },
                                        {
                                            "name": "end",
                                            "nodeType": "YulIdentifier",
                                            "src": "286:3:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "gt",
                                        "nodeType": "YulIdentifier",
                                        "src": "265:2:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "265:25:8"
                                },
                                "nodeType": "YulIf",
                                "src": "262:2:8"
                            },
                            {
                                "expression": {
                                    "arguments": [
                                        {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "338:3:8"
                                        },
                                        {
                                            "name": "dst",
                                            "nodeType": "YulIdentifier",
                                            "src": "343:3:8"
                                        },
                                        {
                                            "name": "length",
                                            "nodeType": "YulIdentifier",
                                            "src": "348:6:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "copy_memory_to_memory",
                                        "nodeType": "YulIdentifier",
                                        "src": "316:21:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "316:39:8"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "316:39:8"
                            }
                        ]
                    },
                    "name": "abi_decode_available_length_t_string_memory_ptr_fromMemory",
                    "nodeType": "YulFunctionDefinition",
                    "parameters": [
                        {
                            "name": "src",
                            "nodeType": "YulTypedName",
                            "src": "75:3:8",
                            "type": ""
                        },
                        {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "80:6:8",
                            "type": ""
                        },
                        {
                            "name": "end",
                            "nodeType": "YulTypedName",
                            "src": "88:3:8",
                            "type": ""
                        }
                    ],
                    "returnVariables": [
                        {
                            "name": "array",
                            "nodeType": "YulTypedName",
                            "src": "96:5:8",
                            "type": ""
                        }
                    ],
                    "src": "7:354:8"
                },
                {
                    "body": {
                        "nodeType": "YulBlock",
                        "src": "430:80:8",
                        "statements": [
                            {
                                "nodeType": "YulAssignment",
                                "src": "440:22:8",
                                "value": {
                                    "arguments": [
                                        {
                                            "name": "offset",
                                            "nodeType": "YulIdentifier",
                                            "src": "455:6:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "449:5:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "449:13:8"
                                },
                                "variableNames": [
                                    {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "440:5:8"
                                    }
                                ]
                            },
                            {
                                "expression": {
                                    "arguments": [
                                        {
                                            "name": "value",
                                            "nodeType": "YulIdentifier",
                                            "src": "498:5:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "validator_revert_t_address",
                                        "nodeType": "YulIdentifier",
                                        "src": "471:26:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "471:33:8"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "471:33:8"
                            }
                        ]
                    },
                    "name": "abi_decode_t_address_fromMemory",
                    "nodeType": "YulFunctionDefinition",
                    "parameters": [
                        {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "408:6:8",
                            "type": ""
                        },
                        {
                            "name": "end",
                            "nodeType": "YulTypedName",
                            "src": "416:3:8",
                            "type": ""
                        }
                    ],
                    "returnVariables": [
                        {
                            "name": "value",
                            "nodeType": "YulTypedName",
                            "src": "424:5:8",
                            "type": ""
                        }
                    ],
                    "src": "367:143:8"
                },
                {
                    "body": {
                        "nodeType": "YulBlock",
                        "src": "603:215:8",
                        "statements": [
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "652:16:8",
                                    "statements": [
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "661:1:8",
                                                        "type": "",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "664:1:8",
                                                        "type": "",
                                                        "value": "0"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "revert",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "654:6:8"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "654:12:8"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "654:12:8"
                                        }
                                    ]
                                },
                                "condition": {
                                    "arguments": [
                                        {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "offset",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "631:6:8"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "639:4:8",
                                                            "type": "",
                                                            "value": "0x1f"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "627:3:8"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "627:17:8"
                                                },
                                                {
                                                    "name": "end",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "646:3:8"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "slt",
                                                "nodeType": "YulIdentifier",
                                                "src": "623:3:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "623:27:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "iszero",
                                        "nodeType": "YulIdentifier",
                                        "src": "616:6:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "616:35:8"
                                },
                                "nodeType": "YulIf",
                                "src": "613:2:8"
                            },
                            {
                                "nodeType": "YulVariableDeclaration",
                                "src": "677:27:8",
                                "value": {
                                    "arguments": [
                                        {
                                            "name": "offset",
                                            "nodeType": "YulIdentifier",
                                            "src": "697:6:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "691:5:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "691:13:8"
                                },
                                "variables": [
                                    {
                                        "name": "length",
                                        "nodeType": "YulTypedName",
                                        "src": "681:6:8",
                                        "type": ""
                                    }
                                ]
                            },
                            {
                                "nodeType": "YulAssignment",
                                "src": "713:99:8",
                                "value": {
                                    "arguments": [
                                        {
                                            "arguments": [
                                                {
                                                    "name": "offset",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "785:6:8"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "793:4:8",
                                                    "type": "",
                                                    "value": "0x20"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "781:3:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "781:17:8"
                                        },
                                        {
                                            "name": "length",
                                            "nodeType": "YulIdentifier",
                                            "src": "800:6:8"
                                        },
                                        {
                                            "name": "end",
                                            "nodeType": "YulIdentifier",
                                            "src": "808:3:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "abi_decode_available_length_t_string_memory_ptr_fromMemory",
                                        "nodeType": "YulIdentifier",
                                        "src": "722:58:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "722:90:8"
                                },
                                "variableNames": [
                                    {
                                        "name": "array",
                                        "nodeType": "YulIdentifier",
                                        "src": "713:5:8"
                                    }
                                ]
                            }
                        ]
                    },
                    "name": "abi_decode_t_string_memory_ptr_fromMemory",
                    "nodeType": "YulFunctionDefinition",
                    "parameters": [
                        {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "581:6:8",
                            "type": ""
                        },
                        {
                            "name": "end",
                            "nodeType": "YulTypedName",
                            "src": "589:3:8",
                            "type": ""
                        }
                    ],
                    "returnVariables": [
                        {
                            "name": "array",
                            "nodeType": "YulTypedName",
                            "src": "597:5:8",
                            "type": ""
                        }
                    ],
                    "src": "530:288:8"
                },
                {
                    "body": {
                        "nodeType": "YulBlock",
                        "src": "955:677:8",
                        "statements": [
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "1001:16:8",
                                    "statements": [
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "1010:1:8",
                                                        "type": "",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "1013:1:8",
                                                        "type": "",
                                                        "value": "0"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "revert",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1003:6:8"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "1003:12:8"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "1003:12:8"
                                        }
                                    ]
                                },
                                "condition": {
                                    "arguments": [
                                        {
                                            "arguments": [
                                                {
                                                    "name": "dataEnd",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "976:7:8"
                                                },
                                                {
                                                    "name": "headStart",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "985:9:8"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "sub",
                                                "nodeType": "YulIdentifier",
                                                "src": "972:3:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "972:23:8"
                                        },
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "997:2:8",
                                            "type": "",
                                            "value": "96"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "slt",
                                        "nodeType": "YulIdentifier",
                                        "src": "968:3:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "968:32:8"
                                },
                                "nodeType": "YulIf",
                                "src": "965:2:8"
                            },
                            {
                                "nodeType": "YulBlock",
                                "src": "1027:224:8",
                                "statements": [
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "1042:38:8",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1066:9:8"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "1077:1:8",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1062:3:8"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1062:17:8"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mload",
                                                "nodeType": "YulIdentifier",
                                                "src": "1056:5:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1056:24:8"
                                        },
                                        "variables": [
                                            {
                                                "name": "offset",
                                                "nodeType": "YulTypedName",
                                                "src": "1046:6:8",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "1127:16:8",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "1136:1:8",
                                                                "type": "",
                                                                "value": "0"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "1139:1:8",
                                                                "type": "",
                                                                "value": "0"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "revert",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1129:6:8"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "1129:12:8"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "1129:12:8"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "offset",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1099:6:8"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1107:18:8",
                                                    "type": "",
                                                    "value": "0xffffffffffffffff"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "gt",
                                                "nodeType": "YulIdentifier",
                                                "src": "1096:2:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1096:30:8"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "1093:2:8"
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "1157:84:8",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1213:9:8"
                                                        },
                                                        {
                                                            "name": "offset",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1224:6:8"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1209:3:8"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1209:22:8"
                                                },
                                                {
                                                    "name": "dataEnd",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1233:7:8"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_decode_t_string_memory_ptr_fromMemory",
                                                "nodeType": "YulIdentifier",
                                                "src": "1167:41:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1167:74:8"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "value0",
                                                "nodeType": "YulIdentifier",
                                                "src": "1157:6:8"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "nodeType": "YulBlock",
                                "src": "1261:225:8",
                                "statements": [
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "1276:39:8",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1300:9:8"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "1311:2:8",
                                                            "type": "",
                                                            "value": "32"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1296:3:8"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1296:18:8"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mload",
                                                "nodeType": "YulIdentifier",
                                                "src": "1290:5:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1290:25:8"
                                        },
                                        "variables": [
                                            {
                                                "name": "offset",
                                                "nodeType": "YulTypedName",
                                                "src": "1280:6:8",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "1362:16:8",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "1371:1:8",
                                                                "type": "",
                                                                "value": "0"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "1374:1:8",
                                                                "type": "",
                                                                "value": "0"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "revert",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1364:6:8"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "1364:12:8"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "1364:12:8"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "offset",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1334:6:8"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1342:18:8",
                                                    "type": "",
                                                    "value": "0xffffffffffffffff"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "gt",
                                                "nodeType": "YulIdentifier",
                                                "src": "1331:2:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1331:30:8"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "1328:2:8"
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "1392:84:8",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1448:9:8"
                                                        },
                                                        {
                                                            "name": "offset",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1459:6:8"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1444:3:8"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1444:22:8"
                                                },
                                                {
                                                    "name": "dataEnd",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1468:7:8"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_decode_t_string_memory_ptr_fromMemory",
                                                "nodeType": "YulIdentifier",
                                                "src": "1402:41:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1402:74:8"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "value1",
                                                "nodeType": "YulIdentifier",
                                                "src": "1392:6:8"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "nodeType": "YulBlock",
                                "src": "1496:129:8",
                                "statements": [
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "1511:16:8",
                                        "value": {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "1525:2:8",
                                            "type": "",
                                            "value": "64"
                                        },
                                        "variables": [
                                            {
                                                "name": "offset",
                                                "nodeType": "YulTypedName",
                                                "src": "1515:6:8",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "1541:74:8",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1587:9:8"
                                                        },
                                                        {
                                                            "name": "offset",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1598:6:8"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1583:3:8"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1583:22:8"
                                                },
                                                {
                                                    "name": "dataEnd",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1607:7:8"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_decode_t_address_fromMemory",
                                                "nodeType": "YulIdentifier",
                                                "src": "1551:31:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1551:64:8"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "value2",
                                                "nodeType": "YulIdentifier",
                                                "src": "1541:6:8"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    "name": "abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_address_fromMemory",
                    "nodeType": "YulFunctionDefinition",
                    "parameters": [
                        {
                            "name": "headStart",
                            "nodeType": "YulTypedName",
                            "src": "909:9:8",
                            "type": ""
                        },
                        {
                            "name": "dataEnd",
                            "nodeType": "YulTypedName",
                            "src": "920:7:8",
                            "type": ""
                        }
                    ],
                    "returnVariables": [
                        {
                            "name": "value0",
                            "nodeType": "YulTypedName",
                            "src": "932:6:8",
                            "type": ""
                        },
                        {
                            "name": "value1",
                            "nodeType": "YulTypedName",
                            "src": "940:6:8",
                            "type": ""
                        },
                        {
                            "name": "value2",
                            "nodeType": "YulTypedName",
                            "src": "948:6:8",
                            "type": ""
                        }
                    ],
                    "src": "824:808:8"
                },
                {
                    "body": {
                        "nodeType": "YulBlock",
                        "src": "1679:88:8",
                        "statements": [
                            {
                                "nodeType": "YulAssignment",
                                "src": "1689:30:8",
                                "value": {
                                    "arguments": [],
                                    "functionName": {
                                        "name": "allocate_unbounded",
                                        "nodeType": "YulIdentifier",
                                        "src": "1699:18:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1699:20:8"
                                },
                                "variableNames": [
                                    {
                                        "name": "memPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "1689:6:8"
                                    }
                                ]
                            },
                            {
                                "expression": {
                                    "arguments": [
                                        {
                                            "name": "memPtr",
                                            "nodeType": "YulIdentifier",
                                            "src": "1748:6:8"
                                        },
                                        {
                                            "name": "size",
                                            "nodeType": "YulIdentifier",
                                            "src": "1756:4:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "finalize_allocation",
                                        "nodeType": "YulIdentifier",
                                        "src": "1728:19:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1728:33:8"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "1728:33:8"
                            }
                        ]
                    },
                    "name": "allocate_memory",
                    "nodeType": "YulFunctionDefinition",
                    "parameters": [
                        {
                            "name": "size",
                            "nodeType": "YulTypedName",
                            "src": "1663:4:8",
                            "type": ""
                        }
                    ],
                    "returnVariables": [
                        {
                            "name": "memPtr",
                            "nodeType": "YulTypedName",
                            "src": "1672:6:8",
                            "type": ""
                        }
                    ],
                    "src": "1638:129:8"
                },
                {
                    "body": {
                        "nodeType": "YulBlock",
                        "src": "1813:35:8",
                        "statements": [
                            {
                                "nodeType": "YulAssignment",
                                "src": "1823:19:8",
                                "value": {
                                    "arguments": [
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "1839:2:8",
                                            "type": "",
                                            "value": "64"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "1833:5:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1833:9:8"
                                },
                                "variableNames": [
                                    {
                                        "name": "memPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "1823:6:8"
                                    }
                                ]
                            }
                        ]
                    },
                    "name": "allocate_unbounded",
                    "nodeType": "YulFunctionDefinition",
                    "returnVariables": [
                        {
                            "name": "memPtr",
                            "nodeType": "YulTypedName",
                            "src": "1806:6:8",
                            "type": ""
                        }
                    ],
                    "src": "1773:75:8"
                },
                {
                    "body": {
                        "nodeType": "YulBlock",
                        "src": "1921:241:8",
                        "statements": [
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "2026:22:8",
                                    "statements": [
                                        {
                                            "expression": {
                                                "arguments": [],
                                                "functionName": {
                                                    "name": "panic_error_0x41",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2028:16:8"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "2028:18:8"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "2028:18:8"
                                        }
                                    ]
                                },
                                "condition": {
                                    "arguments": [
                                        {
                                            "name": "length",
                                            "nodeType": "YulIdentifier",
                                            "src": "1998:6:8"
                                        },
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "2006:18:8",
                                            "type": "",
                                            "value": "0xffffffffffffffff"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "gt",
                                        "nodeType": "YulIdentifier",
                                        "src": "1995:2:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1995:30:8"
                                },
                                "nodeType": "YulIf",
                                "src": "1992:2:8"
                            },
                            {
                                "nodeType": "YulAssignment",
                                "src": "2058:37:8",
                                "value": {
                                    "arguments": [
                                        {
                                            "name": "length",
                                            "nodeType": "YulIdentifier",
                                            "src": "2088:6:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "round_up_to_mul_of_32",
                                        "nodeType": "YulIdentifier",
                                        "src": "2066:21:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2066:29:8"
                                },
                                "variableNames": [
                                    {
                                        "name": "size",
                                        "nodeType": "YulIdentifier",
                                        "src": "2058:4:8"
                                    }
                                ]
                            },
                            {
                                "nodeType": "YulAssignment",
                                "src": "2132:23:8",
                                "value": {
                                    "arguments": [
                                        {
                                            "name": "size",
                                            "nodeType": "YulIdentifier",
                                            "src": "2144:4:8"
                                        },
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "2150:4:8",
                                            "type": "",
                                            "value": "0x20"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "2140:3:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2140:15:8"
                                },
                                "variableNames": [
                                    {
                                        "name": "size",
                                        "nodeType": "YulIdentifier",
                                        "src": "2132:4:8"
                                    }
                                ]
                            }
                        ]
                    },
                    "name": "array_allocation_size_t_string_memory_ptr",
                    "nodeType": "YulFunctionDefinition",
                    "parameters": [
                        {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "1905:6:8",
                            "type": ""
                        }
                    ],
                    "returnVariables": [
                        {
                            "name": "size",
                            "nodeType": "YulTypedName",
                            "src": "1916:4:8",
                            "type": ""
                        }
                    ],
                    "src": "1854:308:8"
                },
                {
                    "body": {
                        "nodeType": "YulBlock",
                        "src": "2213:51:8",
                        "statements": [
                            {
                                "nodeType": "YulAssignment",
                                "src": "2223:35:8",
                                "value": {
                                    "arguments": [
                                        {
                                            "name": "value",
                                            "nodeType": "YulIdentifier",
                                            "src": "2252:5:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "cleanup_t_uint160",
                                        "nodeType": "YulIdentifier",
                                        "src": "2234:17:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2234:24:8"
                                },
                                "variableNames": [
                                    {
                                        "name": "cleaned",
                                        "nodeType": "YulIdentifier",
                                        "src": "2223:7:8"
                                    }
                                ]
                            }
                        ]
                    },
                    "name": "cleanup_t_address",
                    "nodeType": "YulFunctionDefinition",
                    "parameters": [
                        {
                            "name": "value",
                            "nodeType": "YulTypedName",
                            "src": "2195:5:8",
                            "type": ""
                        }
                    ],
                    "returnVariables": [
                        {
                            "name": "cleaned",
                            "nodeType": "YulTypedName",
                            "src": "2205:7:8",
                            "type": ""
                        }
                    ],
                    "src": "2168:96:8"
                },
                {
                    "body": {
                        "nodeType": "YulBlock",
                        "src": "2315:81:8",
                        "statements": [
                            {
                                "nodeType": "YulAssignment",
                                "src": "2325:65:8",
                                "value": {
                                    "arguments": [
                                        {
                                            "name": "value",
                                            "nodeType": "YulIdentifier",
                                            "src": "2340:5:8"
                                        },
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "2347:42:8",
                                            "type": "",
                                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "and",
                                        "nodeType": "YulIdentifier",
                                        "src": "2336:3:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2336:54:8"
                                },
                                "variableNames": [
                                    {
                                        "name": "cleaned",
                                        "nodeType": "YulIdentifier",
                                        "src": "2325:7:8"
                                    }
                                ]
                            }
                        ]
                    },
                    "name": "cleanup_t_uint160",
                    "nodeType": "YulFunctionDefinition",
                    "parameters": [
                        {
                            "name": "value",
                            "nodeType": "YulTypedName",
                            "src": "2297:5:8",
                            "type": ""
                        }
                    ],
                    "returnVariables": [
                        {
                            "name": "cleaned",
                            "nodeType": "YulTypedName",
                            "src": "2307:7:8",
                            "type": ""
                        }
                    ],
                    "src": "2270:126:8"
                },
                {
                    "body": {
                        "nodeType": "YulBlock",
                        "src": "2451:258:8",
                        "statements": [
                            {
                                "nodeType": "YulVariableDeclaration",
                                "src": "2461:10:8",
                                "value": {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2470:1:8",
                                    "type": "",
                                    "value": "0"
                                },
                                "variables": [
                                    {
                                        "name": "i",
                                        "nodeType": "YulTypedName",
                                        "src": "2465:1:8",
                                        "type": ""
                                    }
                                ]
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "2530:63:8",
                                    "statements": [
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "dst",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2555:3:8"
                                                            },
                                                            {
                                                                "name": "i",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2560:1:8"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "add",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2551:3:8"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2551:11:8"
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "name": "src",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2574:3:8"
                                                                    },
                                                                    {
                                                                        "name": "i",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2579:1:8"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "add",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2570:3:8"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "2570:11:8"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "mload",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2564:5:8"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2564:18:8"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mstore",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2544:6:8"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "2544:39:8"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "2544:39:8"
                                        }
                                    ]
                                },
                                "condition": {
                                    "arguments": [
                                        {
                                            "name": "i",
                                            "nodeType": "YulIdentifier",
                                            "src": "2491:1:8"
                                        },
                                        {
                                            "name": "length",
                                            "nodeType": "YulIdentifier",
                                            "src": "2494:6:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "2488:2:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2488:13:8"
                                },
                                "nodeType": "YulForLoop",
                                "post": {
                                    "nodeType": "YulBlock",
                                    "src": "2502:19:8",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "2504:15:8",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "i",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2513:1:8"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "2516:2:8",
                                                        "type": "",
                                                        "value": "32"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "add",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2509:3:8"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "2509:10:8"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "i",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2504:1:8"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "pre": {
                                    "nodeType": "YulBlock",
                                    "src": "2484:3:8",
                                    "statements": []
                                },
                                "src": "2480:113:8"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "2627:76:8",
                                    "statements": [
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "dst",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2677:3:8"
                                                            },
                                                            {
                                                                "name": "length",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2682:6:8"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "add",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2673:3:8"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2673:16:8"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "2691:1:8",
                                                        "type": "",
                                                        "value": "0"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mstore",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2666:6:8"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "2666:27:8"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "2666:27:8"
                                        }
                                    ]
                                },
                                "condition": {
                                    "arguments": [
                                        {
                                            "name": "i",
                                            "nodeType": "YulIdentifier",
                                            "src": "2608:1:8"
                                        },
                                        {
                                            "name": "length",
                                            "nodeType": "YulIdentifier",
                                            "src": "2611:6:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "gt",
                                        "nodeType": "YulIdentifier",
                                        "src": "2605:2:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2605:13:8"
                                },
                                "nodeType": "YulIf",
                                "src": "2602:2:8"
                            }
                        ]
                    },
                    "name": "copy_memory_to_memory",
                    "nodeType": "YulFunctionDefinition",
                    "parameters": [
                        {
                            "name": "src",
                            "nodeType": "YulTypedName",
                            "src": "2433:3:8",
                            "type": ""
                        },
                        {
                            "name": "dst",
                            "nodeType": "YulTypedName",
                            "src": "2438:3:8",
                            "type": ""
                        },
                        {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "2443:6:8",
                            "type": ""
                        }
                    ],
                    "src": "2402:307:8"
                },
                {
                    "body": {
                        "nodeType": "YulBlock",
                        "src": "2766:269:8",
                        "statements": [
                            {
                                "nodeType": "YulAssignment",
                                "src": "2776:22:8",
                                "value": {
                                    "arguments": [
                                        {
                                            "name": "data",
                                            "nodeType": "YulIdentifier",
                                            "src": "2790:4:8"
                                        },
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "2796:1:8",
                                            "type": "",
                                            "value": "2"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "div",
                                        "nodeType": "YulIdentifier",
                                        "src": "2786:3:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2786:12:8"
                                },
                                "variableNames": [
                                    {
                                        "name": "length",
                                        "nodeType": "YulIdentifier",
                                        "src": "2776:6:8"
                                    }
                                ]
                            },
                            {
                                "nodeType": "YulVariableDeclaration",
                                "src": "2807:38:8",
                                "value": {
                                    "arguments": [
                                        {
                                            "name": "data",
                                            "nodeType": "YulIdentifier",
                                            "src": "2837:4:8"
                                        },
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "2843:1:8",
                                            "type": "",
                                            "value": "1"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "and",
                                        "nodeType": "YulIdentifier",
                                        "src": "2833:3:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2833:12:8"
                                },
                                "variables": [
                                    {
                                        "name": "outOfPlaceEncoding",
                                        "nodeType": "YulTypedName",
                                        "src": "2811:18:8",
                                        "type": ""
                                    }
                                ]
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "2884:51:8",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "2898:27:8",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "length",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2912:6:8"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "2920:4:8",
                                                        "type": "",
                                                        "value": "0x7f"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "and",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2908:3:8"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "2908:17:8"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2898:6:8"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "condition": {
                                    "arguments": [
                                        {
                                            "name": "outOfPlaceEncoding",
                                            "nodeType": "YulIdentifier",
                                            "src": "2864:18:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "iszero",
                                        "nodeType": "YulIdentifier",
                                        "src": "2857:6:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2857:26:8"
                                },
                                "nodeType": "YulIf",
                                "src": "2854:2:8"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "2987:42:8",
                                    "statements": [
                                        {
                                            "expression": {
                                                "arguments": [],
                                                "functionName": {
                                                    "name": "panic_error_0x22",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3001:16:8"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "3001:18:8"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "3001:18:8"
                                        }
                                    ]
                                },
                                "condition": {
                                    "arguments": [
                                        {
                                            "name": "outOfPlaceEncoding",
                                            "nodeType": "YulIdentifier",
                                            "src": "2951:18:8"
                                        },
                                        {
                                            "arguments": [
                                                {
                                                    "name": "length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2974:6:8"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "2982:2:8",
                                                    "type": "",
                                                    "value": "32"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "lt",
                                                "nodeType": "YulIdentifier",
                                                "src": "2971:2:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2971:14:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "eq",
                                        "nodeType": "YulIdentifier",
                                        "src": "2948:2:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2948:38:8"
                                },
                                "nodeType": "YulIf",
                                "src": "2945:2:8"
                            }
                        ]
                    },
                    "name": "extract_byte_array_length",
                    "nodeType": "YulFunctionDefinition",
                    "parameters": [
                        {
                            "name": "data",
                            "nodeType": "YulTypedName",
                            "src": "2750:4:8",
                            "type": ""
                        }
                    ],
                    "returnVariables": [
                        {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "2759:6:8",
                            "type": ""
                        }
                    ],
                    "src": "2715:320:8"
                },
                {
                    "body": {
                        "nodeType": "YulBlock",
                        "src": "3084:238:8",
                        "statements": [
                            {
                                "nodeType": "YulVariableDeclaration",
                                "src": "3094:58:8",
                                "value": {
                                    "arguments": [
                                        {
                                            "name": "memPtr",
                                            "nodeType": "YulIdentifier",
                                            "src": "3116:6:8"
                                        },
                                        {
                                            "arguments": [
                                                {
                                                    "name": "size",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3146:4:8"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "round_up_to_mul_of_32",
                                                "nodeType": "YulIdentifier",
                                                "src": "3124:21:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3124:27:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "3112:3:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3112:40:8"
                                },
                                "variables": [
                                    {
                                        "name": "newFreePtr",
                                        "nodeType": "YulTypedName",
                                        "src": "3098:10:8",
                                        "type": ""
                                    }
                                ]
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "3263:22:8",
                                    "statements": [
                                        {
                                            "expression": {
                                                "arguments": [],
                                                "functionName": {
                                                    "name": "panic_error_0x41",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3265:16:8"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "3265:18:8"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "3265:18:8"
                                        }
                                    ]
                                },
                                "condition": {
                                    "arguments": [
                                        {
                                            "arguments": [
                                                {
                                                    "name": "newFreePtr",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3206:10:8"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3218:18:8",
                                                    "type": "",
                                                    "value": "0xffffffffffffffff"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "gt",
                                                "nodeType": "YulIdentifier",
                                                "src": "3203:2:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3203:34:8"
                                        },
                                        {
                                            "arguments": [
                                                {
                                                    "name": "newFreePtr",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3242:10:8"
                                                },
                                                {
                                                    "name": "memPtr",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3254:6:8"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "lt",
                                                "nodeType": "YulIdentifier",
                                                "src": "3239:2:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3239:22:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "or",
                                        "nodeType": "YulIdentifier",
                                        "src": "3200:2:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3200:62:8"
                                },
                                "nodeType": "YulIf",
                                "src": "3197:2:8"
                            },
                            {
                                "expression": {
                                    "arguments": [
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3301:2:8",
                                            "type": "",
                                            "value": "64"
                                        },
                                        {
                                            "name": "newFreePtr",
                                            "nodeType": "YulIdentifier",
                                            "src": "3305:10:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "mstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "3294:6:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3294:22:8"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "3294:22:8"
                            }
                        ]
                    },
                    "name": "finalize_allocation",
                    "nodeType": "YulFunctionDefinition",
                    "parameters": [
                        {
                            "name": "memPtr",
                            "nodeType": "YulTypedName",
                            "src": "3070:6:8",
                            "type": ""
                        },
                        {
                            "name": "size",
                            "nodeType": "YulTypedName",
                            "src": "3078:4:8",
                            "type": ""
                        }
                    ],
                    "src": "3041:281:8"
                },
                {
                    "body": {
                        "nodeType": "YulBlock",
                        "src": "3356:152:8",
                        "statements": [
                            {
                                "expression": {
                                    "arguments": [
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3373:1:8",
                                            "type": "",
                                            "value": "0"
                                        },
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3376:77:8",
                                            "type": "",
                                            "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "mstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "3366:6:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3366:88:8"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "3366:88:8"
                            },
                            {
                                "expression": {
                                    "arguments": [
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3470:1:8",
                                            "type": "",
                                            "value": "4"
                                        },
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3473:4:8",
                                            "type": "",
                                            "value": "0x22"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "mstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "3463:6:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3463:15:8"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "3463:15:8"
                            },
                            {
                                "expression": {
                                    "arguments": [
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3494:1:8",
                                            "type": "",
                                            "value": "0"
                                        },
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3497:4:8",
                                            "type": "",
                                            "value": "0x24"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "revert",
                                        "nodeType": "YulIdentifier",
                                        "src": "3487:6:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3487:15:8"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "3487:15:8"
                            }
                        ]
                    },
                    "name": "panic_error_0x22",
                    "nodeType": "YulFunctionDefinition",
                    "src": "3328:180:8"
                },
                {
                    "body": {
                        "nodeType": "YulBlock",
                        "src": "3542:152:8",
                        "statements": [
                            {
                                "expression": {
                                    "arguments": [
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3559:1:8",
                                            "type": "",
                                            "value": "0"
                                        },
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3562:77:8",
                                            "type": "",
                                            "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "mstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "3552:6:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3552:88:8"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "3552:88:8"
                            },
                            {
                                "expression": {
                                    "arguments": [
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3656:1:8",
                                            "type": "",
                                            "value": "4"
                                        },
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3659:4:8",
                                            "type": "",
                                            "value": "0x41"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "mstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "3649:6:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3649:15:8"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "3649:15:8"
                            },
                            {
                                "expression": {
                                    "arguments": [
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3680:1:8",
                                            "type": "",
                                            "value": "0"
                                        },
                                        {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3683:4:8",
                                            "type": "",
                                            "value": "0x24"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "revert",
                                        "nodeType": "YulIdentifier",
                                        "src": "3673:6:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3673:15:8"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "3673:15:8"
                            }
                        ]
                    },
                    "name": "panic_error_0x41",
                    "nodeType": "YulFunctionDefinition",
                    "src": "3514:180:8"
                },
                {
                    "body": {
                        "nodeType": "YulBlock",
                        "src": "3748:54:8",
                        "statements": [
                            {
                                "nodeType": "YulAssignment",
                                "src": "3758:38:8",
                                "value": {
                                    "arguments": [
                                        {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3776:5:8"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3783:2:8",
                                                    "type": "",
                                                    "value": "31"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "3772:3:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3772:14:8"
                                        },
                                        {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3792:2:8",
                                                    "type": "",
                                                    "value": "31"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "not",
                                                "nodeType": "YulIdentifier",
                                                "src": "3788:3:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3788:7:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "and",
                                        "nodeType": "YulIdentifier",
                                        "src": "3768:3:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3768:28:8"
                                },
                                "variableNames": [
                                    {
                                        "name": "result",
                                        "nodeType": "YulIdentifier",
                                        "src": "3758:6:8"
                                    }
                                ]
                            }
                        ]
                    },
                    "name": "round_up_to_mul_of_32",
                    "nodeType": "YulFunctionDefinition",
                    "parameters": [
                        {
                            "name": "value",
                            "nodeType": "YulTypedName",
                            "src": "3731:5:8",
                            "type": ""
                        }
                    ],
                    "returnVariables": [
                        {
                            "name": "result",
                            "nodeType": "YulTypedName",
                            "src": "3741:6:8",
                            "type": ""
                        }
                    ],
                    "src": "3700:102:8"
                },
                {
                    "body": {
                        "nodeType": "YulBlock",
                        "src": "3851:79:8",
                        "statements": [
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "3908:16:8",
                                    "statements": [
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "3917:1:8",
                                                        "type": "",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "3920:1:8",
                                                        "type": "",
                                                        "value": "0"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "revert",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3910:6:8"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "3910:12:8"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "3910:12:8"
                                        }
                                    ]
                                },
                                "condition": {
                                    "arguments": [
                                        {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3874:5:8"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3899:5:8"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "cleanup_t_address",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3881:17:8"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3881:24:8"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "eq",
                                                "nodeType": "YulIdentifier",
                                                "src": "3871:2:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3871:35:8"
                                        }
                                    ],
                                    "functionName": {
                                        "name": "iszero",
                                        "nodeType": "YulIdentifier",
                                        "src": "3864:6:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3864:43:8"
                                },
                                "nodeType": "YulIf",
                                "src": "3861:2:8"
                            }
                        ]
                    },
                    "name": "validator_revert_t_address",
                    "nodeType": "YulFunctionDefinition",
                    "parameters": [
                        {
                            "name": "value",
                            "nodeType": "YulTypedName",
                            "src": "3844:5:8",
                            "type": ""
                        }
                    ],
                    "src": "3808:122:8"
                }
            ]
        },
        "contents": "{\n\n    function abi_decode_available_length_t_string_memory_ptr_fromMemory(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert(0, 0) }\n        copy_memory_to_memory(src, dst, length)\n    }\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr_fromMemory(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let length := mload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr_fromMemory(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_address_fromMemory(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n\n        {\n\n            let offset := mload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value0 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := mload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value1 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n}\n",
        "id": 8,
        "language": "Yul",
        "name": "#utility.yul"
    }
],
    "linkReferences": {},
    "object": "60a06040523480156200001157600080fd5b5060405162002fc038038062002fc08339818101604052810190620000379190620001e6565b8282816000908051906020019062000051929190620000ad565b5080600190805190602001906200006a929190620000ad565b5050508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250505050506200042c565b828054620000bb9062000337565b90600052602060002090601f016020900481019282620000df57600085556200012b565b82601f10620000fa57805160ff19168380011785556200012b565b828001600101855582156200012b579182015b828111156200012a5782518255916020019190600101906200010d565b5b5090506200013a91906200013e565b5090565b5b80821115620001595760008160009055506001016200013f565b5090565b6000620001746200016e8462000297565b6200026e565b9050828152602081018484840111156200018d57600080fd5b6200019a84828562000301565b509392505050565b600081519050620001b38162000412565b92915050565b600082601f830112620001cb57600080fd5b8151620001dd8482602086016200015d565b91505092915050565b600080600060608486031215620001fc57600080fd5b600084015167ffffffffffffffff8111156200021757600080fd5b6200022586828701620001b9565b935050602084015167ffffffffffffffff8111156200024357600080fd5b6200025186828701620001b9565b92505060406200026486828701620001a2565b9150509250925092565b60006200027a6200028d565b90506200028882826200036d565b919050565b6000604051905090565b600067ffffffffffffffff821115620002b557620002b4620003d2565b5b620002c08262000401565b9050602081019050919050565b6000620002da82620002e1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b838110156200032157808201518184015260208101905062000304565b8381111562000331576000848401525b50505050565b600060028204905060018216806200035057607f821691505b60208210811415620003675762000366620003a3565b5b50919050565b620003788262000401565b810181811067ffffffffffffffff821117156200039a5762000399620003d2565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6200041d81620002cd565b81146200042957600080fd5b50565b60805160601c612b6e62000452600039600081816107f8015261088c0152612b6e6000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063630303c6116100ad57806395d89b411161007157806395d89b4114610352578063a22cb46514610370578063b88d4fde1461038c578063c87b56dd146103a8578063e985e9c5146103d857610121565b8063630303c6146102765780636352211e146102a657806370a08231146102d6578063918a15cf1461030657806394d008ef1461033657610121565b8063238ac933116100f4578063238ac933146101c057806323b872dd146101de578063258ae582146101fa57806342842e0e1461022a578063512c91df1461024657610121565b806301ffc9a71461012657806306fdde0314610156578063081812fc14610174578063095ea7b3146101a4575b600080fd5b610140600480360381019061013b9190611daa565b610408565b60405161014d919061221f565b60405180910390f35b61015e610542565b60405161016b919061229a565b60405180910390f35b61018e60048036038101906101899190611dfc565b6105d0565b60405161019b91906121b8565b60405180910390f35b6101be60048036038101906101b99190611c8a565b6106af565b005b6101c86107f6565b6040516101d591906121b8565b60405180910390f35b6101f860048036038101906101f39190611b84565b61081a565b005b610214600480360381019061020f9190611d56565b610883565b604051610221919061221f565b60405180910390f35b610244600480360381019061023f9190611b84565b6108b8565b005b610260600480360381019061025b9190611c8a565b6108d8565b60405161026d919061223a565b60405180910390f35b610290600480360381019061028b9190611b1f565b61090b565b60405161029d919061221f565b60405180910390f35b6102c060048036038101906102bb9190611dfc565b61092b565b6040516102cd91906121b8565b60405180910390f35b6102f060048036038101906102eb9190611b1f565b6109d8565b6040516102fd919061245c565b60405180910390f35b610320600480360381019061031b9190611d2d565b610a90565b60405161032d919061223a565b60405180910390f35b610350600480360381019061034b9190611cc6565b610ac0565b005b61035a610c1a565b604051610367919061229a565b60405180910390f35b61038a60048036038101906103859190611c4e565b610ca8565b005b6103a660048036038101906103a19190611bd3565b610da5565b005b6103c260048036038101906103bd9190611dfc565b610e10565b6040516103cf919061229a565b60405180910390f35b6103f260048036038101906103ed9190611b48565b610f12565b6040516103ff919061221f565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104d357507f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061053b57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b6000805461054f90612698565b80601f016020809104026020016040519081016040528092919081815260200182805461057b90612698565b80156105c85780601f1061059d576101008083540402835291602001916105c8565b820191906000526020600020905b8154815290600101906020018083116105ab57829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610674576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066b9061235c565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806107a75750600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b6107e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107dd906122fc565b60405180910390fd5b6107f1818484610fa6565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006108258261092b565b9050610832813384611058565b610871576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610868906122bc565b60405180910390fd5b61087d8185858561118c565b50505050565b60006108b083837f00000000000000000000000000000000000000000000000000000000000000006113d7565b905092915050565b6108d383838360405180602001604052806000815250610da5565b505050565b600082826040516020016108ed929190612142565b60405160208183030381529060405280519060200120905092915050565b60066020528060005260406000206000915054906101000a900460ff1681565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156109d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ca9061235c565b60405180910390fd5b919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a409061237c565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600081604051602001610aa39190612192565b604051602081830303815290604052805190602001209050919050565b6000610acc84846108d8565b90506000610ad982610a90565b9050610ae58184610883565b610b24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1b9061231c565b60405180910390fd5b600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610bb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba89061243c565b60405180910390fd5b610bbb858561141a565b6001600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050505050565b60018054610c2790612698565b80601f0160208091040260200160405190810160405280929190818152602001828054610c5390612698565b8015610ca05780601f10610c7557610100808354040283529160200191610ca0565b820191906000526020600020905b815481529060010190602001808311610c8357829003601f168201915b505050505081565b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610d99919061221f565b60405180910390a35050565b6000610db08361092b565b9050610dbd813385611058565b610dfc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df3906122bc565b60405180910390fd5b610e098186868686611635565b5050505050565b6060600073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610eb5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eac9061239c565b60405180910390fd5b6000610ebf611693565b90506000815111610edf5760405180602001604052806000815250610f0a565b80610ee9846116aa565b604051602001610efa92919061216e565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b60008373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614806110f257508273ffffffffffffffffffffffffffffffffffffffff166004600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b806111835750600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b90509392505050565b8373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146111fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f19061241c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561126a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611261906122dc565b60405180910390fd5b61127684600083610fa6565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112c69190612597565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461131d9190612510565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a450505050565b60008173ffffffffffffffffffffffffffffffffffffffff166113fa8585611857565b73ffffffffffffffffffffffffffffffffffffffff161490509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561148a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114819061233c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461152c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611523906123bc565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461157c9190612510565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6116418585858561118c565b61164d84848484611914565b61168c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611683906123dc565b60405180910390fd5b5050505050565b606060405180602001604052806000815250905090565b606060008214156116f2576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611852565b600082905060005b6000821461172457808061170d906126fb565b915050600a8261171d9190612566565b91506116fa565b60008167ffffffffffffffff811115611766577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156117985781602001600182028036833780820191505090505b5090505b6000851461184b576001826117b19190612597565b9150600a856117c0919061277c565b60306117cc9190612510565b60f81b818381518110611808577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856118449190612566565b945061179c565b8093505050505b919050565b6000604182511461189d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611894906123fc565b60405180910390fd5b60008060006020850151925060408501519150606085015160001a9050600186828585604051600081526020016040526040516118dd9493929190612255565b6020604051602081039080840390855afa1580156118ff573d6000803e3d6000fd5b50505060206040510351935050505092915050565b60006119358473ffffffffffffffffffffffffffffffffffffffff16611a26565b15611a195763150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff1660e01b81526004016119a094939291906121d3565b602060405180830381600087803b1580156119ba57600080fd5b505af11580156119ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119f29190611dd3565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050611a1e565b600190505b949350505050565b600080823b905060008111915050919050565b6000611a4c611a478461249c565b612477565b905082815260208101848484011115611a6457600080fd5b611a6f848285612656565b509392505050565b600081359050611a8681612ac5565b92915050565b600081359050611a9b81612adc565b92915050565b600081359050611ab081612af3565b92915050565b600081359050611ac581612b0a565b92915050565b600081519050611ada81612b0a565b92915050565b600082601f830112611af157600080fd5b8135611b01848260208601611a39565b91505092915050565b600081359050611b1981612b21565b92915050565b600060208284031215611b3157600080fd5b6000611b3f84828501611a77565b91505092915050565b60008060408385031215611b5b57600080fd5b6000611b6985828601611a77565b9250506020611b7a85828601611a77565b9150509250929050565b600080600060608486031215611b9957600080fd5b6000611ba786828701611a77565b9350506020611bb886828701611a77565b9250506040611bc986828701611b0a565b9150509250925092565b60008060008060808587031215611be957600080fd5b6000611bf787828801611a77565b9450506020611c0887828801611a77565b9350506040611c1987828801611b0a565b925050606085013567ffffffffffffffff811115611c3657600080fd5b611c4287828801611ae0565b91505092959194509250565b60008060408385031215611c6157600080fd5b6000611c6f85828601611a77565b9250506020611c8085828601611a8c565b9150509250929050565b60008060408385031215611c9d57600080fd5b6000611cab85828601611a77565b9250506020611cbc85828601611b0a565b9150509250929050565b600080600060608486031215611cdb57600080fd5b6000611ce986828701611a77565b9350506020611cfa86828701611b0a565b925050604084013567ffffffffffffffff811115611d1757600080fd5b611d2386828701611ae0565b9150509250925092565b600060208284031215611d3f57600080fd5b6000611d4d84828501611aa1565b91505092915050565b60008060408385031215611d6957600080fd5b6000611d7785828601611aa1565b925050602083013567ffffffffffffffff811115611d9457600080fd5b611da085828601611ae0565b9150509250929050565b600060208284031215611dbc57600080fd5b6000611dca84828501611ab6565b91505092915050565b600060208284031215611de557600080fd5b6000611df384828501611acb565b91505092915050565b600060208284031215611e0e57600080fd5b6000611e1c84828501611b0a565b91505092915050565b611e2e816125cb565b82525050565b611e45611e40826125cb565b612744565b82525050565b611e54816125dd565b82525050565b611e63816125e9565b82525050565b611e7a611e75826125e9565b612756565b82525050565b6000611e8b826124cd565b611e9581856124e3565b9350611ea5818560208601612665565b611eae81612869565b840191505092915050565b6000611ec4826124d8565b611ece81856124f4565b9350611ede818560208601612665565b611ee781612869565b840191505092915050565b6000611efd826124d8565b611f078185612505565b9350611f17818560208601612665565b80840191505092915050565b6000611f30601c83612505565b9150611f3b82612887565b601c82019050919050565b6000611f536016836124f4565b9150611f5e826128b0565b602082019050919050565b6000611f76601c836124f4565b9150611f81826128d9565b602082019050919050565b6000611f99601e836124f4565b9150611fa482612902565b602082019050919050565b6000611fbc6011836124f4565b9150611fc78261292b565b602082019050919050565b6000611fdf6014836124f4565b9150611fea82612954565b602082019050919050565b60006120026013836124f4565b915061200d8261297d565b602082019050919050565b60006120256014836124f4565b9150612030826129a6565b602082019050919050565b6000612048600f836124f4565b9150612053826129cf565b602082019050919050565b600061206b6014836124f4565b9150612076826129f8565b602082019050919050565b600061208e6012836124f4565b915061209982612a21565b602082019050919050565b60006120b16018836124f4565b91506120bc82612a4a565b602082019050919050565b60006120d46009836124f4565b91506120df82612a73565b602082019050919050565b60006120f7600f836124f4565b915061210282612a9c565b602082019050919050565b6121168161263f565b82525050565b61212d6121288261263f565b612772565b82525050565b61213c81612649565b82525050565b600061214e8285611e34565b60148201915061215e828461211c565b6020820191508190509392505050565b600061217a8285611ef2565b91506121868284611ef2565b91508190509392505050565b600061219d82611f23565b91506121a98284611e69565b60208201915081905092915050565b60006020820190506121cd6000830184611e25565b92915050565b60006080820190506121e86000830187611e25565b6121f56020830186611e25565b612202604083018561210d565b81810360608301526122148184611e80565b905095945050505050565b60006020820190506122346000830184611e4b565b92915050565b600060208201905061224f6000830184611e5a565b92915050565b600060808201905061226a6000830187611e5a565b6122776020830186612133565b6122846040830185611e5a565b6122916060830184611e5a565b95945050505050565b600060208201905081810360008301526122b48184611eb9565b905092915050565b600060208201905081810360008301526122d581611f46565b9050919050565b600060208201905081810360008301526122f581611f69565b9050919050565b6000602082019050818103600083015261231581611f8c565b9050919050565b6000602082019050818103600083015261233581611faf565b9050919050565b6000602082019050818103600083015261235581611fd2565b9050919050565b6000602082019050818103600083015261237581611ff5565b9050919050565b6000602082019050818103600083015261239581612018565b9050919050565b600060208201905081810360008301526123b58161203b565b9050919050565b600060208201905081810360008301526123d58161205e565b9050919050565b600060208201905081810360008301526123f581612081565b9050919050565b60006020820190508181036000830152612415816120a4565b9050919050565b60006020820190508181036000830152612435816120c7565b9050919050565b60006020820190508181036000830152612455816120ea565b9050919050565b6000602082019050612471600083018461210d565b92915050565b6000612481612492565b905061248d82826126ca565b919050565b6000604051905090565b600067ffffffffffffffff8211156124b7576124b661283a565b5b6124c082612869565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061251b8261263f565b91506125268361263f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561255b5761255a6127ad565b5b828201905092915050565b60006125718261263f565b915061257c8361263f565b92508261258c5761258b6127dc565b5b828204905092915050565b60006125a28261263f565b91506125ad8361263f565b9250828210156125c0576125bf6127ad565b5b828203905092915050565b60006125d68261261f565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015612683578082015181840152602081019050612668565b83811115612692576000848401525b50505050565b600060028204905060018216806126b057607f821691505b602082108114156126c4576126c361280b565b5b50919050565b6126d382612869565b810181811067ffffffffffffffff821117156126f2576126f161283a565b5b80604052505050565b60006127068261263f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612739576127386127ad565b5b600182019050919050565b600061274f82612760565b9050919050565b6000819050919050565b600061276b8261287a565b9050919050565b6000819050919050565b60006127878261263f565b91506127928361263f565b9250826127a2576127a16127dc565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b7f6e6f74206f776e6572206e6f7220617070726f76656400000000000000000000600082015250565b7f7472616e7366657220746f20746865207a65726f206164647265737300000000600082015250565b7f6e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c0000600082015250565b7f496e76616c6964207369676e6174757265000000000000000000000000000000600082015250565b7f6d696e7420746f207a65726f2061646472657373000000000000000000000000600082015250565b7f746f6b656e20646f65736e277420657869737400000000000000000000000000600082015250565b7f6f776e6572203d207a65726f2061646472657373000000000000000000000000600082015250565b7f546f6b656e204e6f742045786973740000000000000000000000000000000000600082015250565b7f746f6b656e20616c7265616479206d696e746564000000000000000000000000600082015250565b7f6e6f742045524337323152656365697665720000000000000000000000000000600082015250565b7f696e76616c6964207369676e6174757265206c656e6774680000000000000000600082015250565b7f6e6f74206f776e65720000000000000000000000000000000000000000000000600082015250565b7f416c7265616479206d696e746564210000000000000000000000000000000000600082015250565b612ace816125cb565b8114612ad957600080fd5b50565b612ae5816125dd565b8114612af057600080fd5b50565b612afc816125e9565b8114612b0757600080fd5b50565b612b13816125f3565b8114612b1e57600080fd5b50565b612b2a8161263f565b8114612b3557600080fd5b5056fea26469706673582212206ec0169e18f4460a840a280b044137cc0c5be72ad5ffbd53e42edb11a0d1e06a64736f6c63430008040033",
    "opcodes": "PUSH1 0xA0 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0x2FC0 CODESIZE SUB DUP1 PUSH3 0x2FC0 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH3 0x37 SWAP2 SWAP1 PUSH3 0x1E6 JUMP JUMPDEST DUP3 DUP3 DUP2 PUSH1 0x0 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0x51 SWAP3 SWAP2 SWAP1 PUSH3 0xAD JUMP JUMPDEST POP DUP1 PUSH1 0x1 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0x6A SWAP3 SWAP2 SWAP1 PUSH3 0xAD JUMP JUMPDEST POP POP POP DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x80 DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x60 SHL DUP2 MSTORE POP POP POP POP POP PUSH3 0x42C JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH3 0xBB SWAP1 PUSH3 0x337 JUMP JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH3 0xDF JUMPI PUSH1 0x0 DUP6 SSTORE PUSH3 0x12B JUMP JUMPDEST DUP3 PUSH1 0x1F LT PUSH3 0xFA JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH3 0x12B JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH3 0x12B JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH3 0x12A JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH3 0x10D JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH3 0x13A SWAP2 SWAP1 PUSH3 0x13E JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH3 0x159 JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH3 0x13F JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH3 0x174 PUSH3 0x16E DUP5 PUSH3 0x297 JUMP JUMPDEST PUSH3 0x26E JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH3 0x18D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x19A DUP5 DUP3 DUP6 PUSH3 0x301 JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0x1B3 DUP2 PUSH3 0x412 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x1CB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 MLOAD PUSH3 0x1DD DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH3 0x15D JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH3 0x1FC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP5 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x217 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x225 DUP7 DUP3 DUP8 ADD PUSH3 0x1B9 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 DUP5 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x243 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x251 DUP7 DUP3 DUP8 ADD PUSH3 0x1B9 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 PUSH3 0x264 DUP7 DUP3 DUP8 ADD PUSH3 0x1A2 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 PUSH3 0x27A PUSH3 0x28D JUMP JUMPDEST SWAP1 POP PUSH3 0x288 DUP3 DUP3 PUSH3 0x36D JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH3 0x2B5 JUMPI PUSH3 0x2B4 PUSH3 0x3D2 JUMP JUMPDEST JUMPDEST PUSH3 0x2C0 DUP3 PUSH3 0x401 JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x2DA DUP3 PUSH3 0x2E1 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH3 0x321 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH3 0x304 JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH3 0x331 JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH3 0x350 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH3 0x367 JUMPI PUSH3 0x366 PUSH3 0x3A3 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x378 DUP3 PUSH3 0x401 JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH3 0x39A JUMPI PUSH3 0x399 PUSH3 0x3D2 JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x41D DUP2 PUSH3 0x2CD JUMP JUMPDEST DUP2 EQ PUSH3 0x429 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x80 MLOAD PUSH1 0x60 SHR PUSH2 0x2B6E PUSH3 0x452 PUSH1 0x0 CODECOPY PUSH1 0x0 DUP2 DUP2 PUSH2 0x7F8 ADD MSTORE PUSH2 0x88C ADD MSTORE PUSH2 0x2B6E PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x121 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x630303C6 GT PUSH2 0xAD JUMPI DUP1 PUSH4 0x95D89B41 GT PUSH2 0x71 JUMPI DUP1 PUSH4 0x95D89B41 EQ PUSH2 0x352 JUMPI DUP1 PUSH4 0xA22CB465 EQ PUSH2 0x370 JUMPI DUP1 PUSH4 0xB88D4FDE EQ PUSH2 0x38C JUMPI DUP1 PUSH4 0xC87B56DD EQ PUSH2 0x3A8 JUMPI DUP1 PUSH4 0xE985E9C5 EQ PUSH2 0x3D8 JUMPI PUSH2 0x121 JUMP JUMPDEST DUP1 PUSH4 0x630303C6 EQ PUSH2 0x276 JUMPI DUP1 PUSH4 0x6352211E EQ PUSH2 0x2A6 JUMPI DUP1 PUSH4 0x70A08231 EQ PUSH2 0x2D6 JUMPI DUP1 PUSH4 0x918A15CF EQ PUSH2 0x306 JUMPI DUP1 PUSH4 0x94D008EF EQ PUSH2 0x336 JUMPI PUSH2 0x121 JUMP JUMPDEST DUP1 PUSH4 0x238AC933 GT PUSH2 0xF4 JUMPI DUP1 PUSH4 0x238AC933 EQ PUSH2 0x1C0 JUMPI DUP1 PUSH4 0x23B872DD EQ PUSH2 0x1DE JUMPI DUP1 PUSH4 0x258AE582 EQ PUSH2 0x1FA JUMPI DUP1 PUSH4 0x42842E0E EQ PUSH2 0x22A JUMPI DUP1 PUSH4 0x512C91DF EQ PUSH2 0x246 JUMPI PUSH2 0x121 JUMP JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0x126 JUMPI DUP1 PUSH4 0x6FDDE03 EQ PUSH2 0x156 JUMPI DUP1 PUSH4 0x81812FC EQ PUSH2 0x174 JUMPI DUP1 PUSH4 0x95EA7B3 EQ PUSH2 0x1A4 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x140 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x13B SWAP2 SWAP1 PUSH2 0x1DAA JUMP JUMPDEST PUSH2 0x408 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x14D SWAP2 SWAP1 PUSH2 0x221F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x15E PUSH2 0x542 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x16B SWAP2 SWAP1 PUSH2 0x229A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x18E PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x189 SWAP2 SWAP1 PUSH2 0x1DFC JUMP JUMPDEST PUSH2 0x5D0 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x19B SWAP2 SWAP1 PUSH2 0x21B8 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1BE PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1B9 SWAP2 SWAP1 PUSH2 0x1C8A JUMP JUMPDEST PUSH2 0x6AF JUMP JUMPDEST STOP JUMPDEST PUSH2 0x1C8 PUSH2 0x7F6 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1D5 SWAP2 SWAP1 PUSH2 0x21B8 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1F8 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1F3 SWAP2 SWAP1 PUSH2 0x1B84 JUMP JUMPDEST PUSH2 0x81A JUMP JUMPDEST STOP JUMPDEST PUSH2 0x214 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x20F SWAP2 SWAP1 PUSH2 0x1D56 JUMP JUMPDEST PUSH2 0x883 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x221 SWAP2 SWAP1 PUSH2 0x221F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x244 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x23F SWAP2 SWAP1 PUSH2 0x1B84 JUMP JUMPDEST PUSH2 0x8B8 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x260 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x25B SWAP2 SWAP1 PUSH2 0x1C8A JUMP JUMPDEST PUSH2 0x8D8 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x26D SWAP2 SWAP1 PUSH2 0x223A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x290 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x28B SWAP2 SWAP1 PUSH2 0x1B1F JUMP JUMPDEST PUSH2 0x90B JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x29D SWAP2 SWAP1 PUSH2 0x221F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x2C0 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x2BB SWAP2 SWAP1 PUSH2 0x1DFC JUMP JUMPDEST PUSH2 0x92B JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x2CD SWAP2 SWAP1 PUSH2 0x21B8 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x2F0 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x2EB SWAP2 SWAP1 PUSH2 0x1B1F JUMP JUMPDEST PUSH2 0x9D8 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x2FD SWAP2 SWAP1 PUSH2 0x245C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x320 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x31B SWAP2 SWAP1 PUSH2 0x1D2D JUMP JUMPDEST PUSH2 0xA90 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x32D SWAP2 SWAP1 PUSH2 0x223A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x350 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x34B SWAP2 SWAP1 PUSH2 0x1CC6 JUMP JUMPDEST PUSH2 0xAC0 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x35A PUSH2 0xC1A JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x367 SWAP2 SWAP1 PUSH2 0x229A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x38A PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x385 SWAP2 SWAP1 PUSH2 0x1C4E JUMP JUMPDEST PUSH2 0xCA8 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x3A6 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x3A1 SWAP2 SWAP1 PUSH2 0x1BD3 JUMP JUMPDEST PUSH2 0xDA5 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x3C2 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x3BD SWAP2 SWAP1 PUSH2 0x1DFC JUMP JUMPDEST PUSH2 0xE10 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x3CF SWAP2 SWAP1 PUSH2 0x229A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x3F2 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x3ED SWAP2 SWAP1 PUSH2 0x1B48 JUMP JUMPDEST PUSH2 0xF12 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x3FF SWAP2 SWAP1 PUSH2 0x221F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 PUSH32 0x80AC58CD00000000000000000000000000000000000000000000000000000000 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND DUP3 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ DUP1 PUSH2 0x4D3 JUMPI POP PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND DUP3 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ JUMPDEST DUP1 PUSH2 0x53B JUMPI POP PUSH32 0x5B5E139F00000000000000000000000000000000000000000000000000000000 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND DUP3 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH2 0x54F SWAP1 PUSH2 0x2698 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x57B SWAP1 PUSH2 0x2698 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x5C8 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x59D JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x5C8 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x5AB JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x2 PUSH1 0x0 DUP5 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0x674 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x66B SWAP1 PUSH2 0x235C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x4 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ DUP1 PUSH2 0x7A7 JUMPI POP PUSH1 0x5 PUSH1 0x0 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND JUMPDEST PUSH2 0x7E6 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x7DD SWAP1 PUSH2 0x22FC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x7F1 DUP2 DUP5 DUP5 PUSH2 0xFA6 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH32 0x0 DUP2 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x825 DUP3 PUSH2 0x92B JUMP JUMPDEST SWAP1 POP PUSH2 0x832 DUP2 CALLER DUP5 PUSH2 0x1058 JUMP JUMPDEST PUSH2 0x871 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x868 SWAP1 PUSH2 0x22BC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x87D DUP2 DUP6 DUP6 DUP6 PUSH2 0x118C JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x8B0 DUP4 DUP4 PUSH32 0x0 PUSH2 0x13D7 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x8D3 DUP4 DUP4 DUP4 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x0 DUP2 MSTORE POP PUSH2 0xDA5 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 PUSH1 0x40 MLOAD PUSH1 0x20 ADD PUSH2 0x8ED SWAP3 SWAP2 SWAP1 PUSH2 0x2142 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE DUP1 MLOAD SWAP1 PUSH1 0x20 ADD KECCAK256 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x6 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0x9D3 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x9CA SWAP1 PUSH2 0x235C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xA49 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xA40 SWAP1 PUSH2 0x237C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x3 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x40 MLOAD PUSH1 0x20 ADD PUSH2 0xAA3 SWAP2 SWAP1 PUSH2 0x2192 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE DUP1 MLOAD SWAP1 PUSH1 0x20 ADD KECCAK256 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xACC DUP5 DUP5 PUSH2 0x8D8 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0xAD9 DUP3 PUSH2 0xA90 JUMP JUMPDEST SWAP1 POP PUSH2 0xAE5 DUP2 DUP5 PUSH2 0x883 JUMP JUMPDEST PUSH2 0xB24 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xB1B SWAP1 PUSH2 0x231C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x6 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO PUSH2 0xBB1 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xBA8 SWAP1 PUSH2 0x243C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xBBB DUP6 DUP6 PUSH2 0x141A JUMP JUMPDEST PUSH1 0x1 PUSH1 0x6 PUSH1 0x0 DUP8 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x1 DUP1 SLOAD PUSH2 0xC27 SWAP1 PUSH2 0x2698 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0xC53 SWAP1 PUSH2 0x2698 JUMP JUMPDEST DUP1 ISZERO PUSH2 0xCA0 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xC75 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0xCA0 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0xC83 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST DUP1 PUSH1 0x5 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x17307EAB39AB6107E8899845AD3D59BD9653F200F220920489CA2B5937696C31 DUP4 PUSH1 0x40 MLOAD PUSH2 0xD99 SWAP2 SWAP1 PUSH2 0x221F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xDB0 DUP4 PUSH2 0x92B JUMP JUMPDEST SWAP1 POP PUSH2 0xDBD DUP2 CALLER DUP6 PUSH2 0x1058 JUMP JUMPDEST PUSH2 0xDFC JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xDF3 SWAP1 PUSH2 0x22BC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xE09 DUP2 DUP7 DUP7 DUP7 DUP7 PUSH2 0x1635 JUMP JUMPDEST POP POP POP POP POP JUMP JUMPDEST PUSH1 0x60 PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x2 PUSH1 0x0 DUP5 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xEB5 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xEAC SWAP1 PUSH2 0x239C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0xEBF PUSH2 0x1693 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 DUP2 MLOAD GT PUSH2 0xEDF JUMPI PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x0 DUP2 MSTORE POP PUSH2 0xF0A JUMP JUMPDEST DUP1 PUSH2 0xEE9 DUP5 PUSH2 0x16AA JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 ADD PUSH2 0xEFA SWAP3 SWAP2 SWAP1 PUSH2 0x216E JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE JUMPDEST SWAP2 POP POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x5 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST DUP2 PUSH1 0x4 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG4 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ DUP1 PUSH2 0x10F2 JUMPI POP DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x4 PUSH1 0x0 DUP5 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ JUMPDEST DUP1 PUSH2 0x1183 JUMPI POP PUSH1 0x5 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND JUMPDEST SWAP1 POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x11FA JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x11F1 SWAP1 PUSH2 0x241C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0x126A JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1261 SWAP1 PUSH2 0x22DC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x1276 DUP5 PUSH1 0x0 DUP4 PUSH2 0xFA6 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x3 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x12C6 SWAP2 SWAP1 PUSH2 0x2597 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP PUSH1 0x1 PUSH1 0x3 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x131D SWAP2 SWAP1 PUSH2 0x2510 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP2 PUSH1 0x2 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x13FA DUP6 DUP6 PUSH2 0x1857 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ SWAP1 POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0x148A JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1481 SWAP1 PUSH2 0x233C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x2 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x152C JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1523 SWAP1 PUSH2 0x23BC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0x3 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x157C SWAP2 SWAP1 PUSH2 0x2510 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP2 PUSH1 0x2 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG4 POP POP JUMP JUMPDEST PUSH2 0x1641 DUP6 DUP6 DUP6 DUP6 PUSH2 0x118C JUMP JUMPDEST PUSH2 0x164D DUP5 DUP5 DUP5 DUP5 PUSH2 0x1914 JUMP JUMPDEST PUSH2 0x168C JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1683 SWAP1 PUSH2 0x23DC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST POP POP POP POP POP JUMP JUMPDEST PUSH1 0x60 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x0 DUP2 MSTORE POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x0 DUP3 EQ ISZERO PUSH2 0x16F2 JUMPI PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x1 DUP2 MSTORE PUSH1 0x20 ADD PUSH32 0x3000000000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE POP SWAP1 POP PUSH2 0x1852 JUMP JUMPDEST PUSH1 0x0 DUP3 SWAP1 POP PUSH1 0x0 JUMPDEST PUSH1 0x0 DUP3 EQ PUSH2 0x1724 JUMPI DUP1 DUP1 PUSH2 0x170D SWAP1 PUSH2 0x26FB JUMP JUMPDEST SWAP2 POP POP PUSH1 0xA DUP3 PUSH2 0x171D SWAP2 SWAP1 PUSH2 0x2566 JUMP JUMPDEST SWAP2 POP PUSH2 0x16FA JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x1766 JUMPI PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP1 DUP3 MSTORE DUP1 PUSH1 0x1F ADD PUSH1 0x1F NOT AND PUSH1 0x20 ADD DUP3 ADD PUSH1 0x40 MSTORE DUP1 ISZERO PUSH2 0x1798 JUMPI DUP2 PUSH1 0x20 ADD PUSH1 0x1 DUP3 MUL DUP1 CALLDATASIZE DUP4 CALLDATACOPY DUP1 DUP3 ADD SWAP2 POP POP SWAP1 POP JUMPDEST POP SWAP1 POP JUMPDEST PUSH1 0x0 DUP6 EQ PUSH2 0x184B JUMPI PUSH1 0x1 DUP3 PUSH2 0x17B1 SWAP2 SWAP1 PUSH2 0x2597 JUMP JUMPDEST SWAP2 POP PUSH1 0xA DUP6 PUSH2 0x17C0 SWAP2 SWAP1 PUSH2 0x277C JUMP JUMPDEST PUSH1 0x30 PUSH2 0x17CC SWAP2 SWAP1 PUSH2 0x2510 JUMP JUMPDEST PUSH1 0xF8 SHL DUP2 DUP4 DUP2 MLOAD DUP2 LT PUSH2 0x1808 JUMPI PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x20 ADD ADD SWAP1 PUSH31 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND SWAP1 DUP2 PUSH1 0x0 BYTE SWAP1 MSTORE8 POP PUSH1 0xA DUP6 PUSH2 0x1844 SWAP2 SWAP1 PUSH2 0x2566 JUMP JUMPDEST SWAP5 POP PUSH2 0x179C JUMP JUMPDEST DUP1 SWAP4 POP POP POP POP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x41 DUP3 MLOAD EQ PUSH2 0x189D JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1894 SWAP1 PUSH2 0x23FC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x20 DUP6 ADD MLOAD SWAP3 POP PUSH1 0x40 DUP6 ADD MLOAD SWAP2 POP PUSH1 0x60 DUP6 ADD MLOAD PUSH1 0x0 BYTE SWAP1 POP PUSH1 0x1 DUP7 DUP3 DUP6 DUP6 PUSH1 0x40 MLOAD PUSH1 0x0 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MSTORE PUSH1 0x40 MLOAD PUSH2 0x18DD SWAP5 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x2255 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 SUB SWAP1 DUP1 DUP5 SUB SWAP1 DUP6 GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0x18FF JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP PUSH1 0x20 PUSH1 0x40 MLOAD SUB MLOAD SWAP4 POP POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1935 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x1A26 JUMP JUMPDEST ISZERO PUSH2 0x1A19 JUMPI PUSH4 0x150B7A02 PUSH1 0xE0 SHL PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x150B7A02 CALLER DUP9 DUP8 DUP8 PUSH1 0x40 MLOAD DUP6 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x19A0 SWAP5 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x21D3 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x19BA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x19CE JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x19F2 SWAP2 SWAP1 PUSH2 0x1DD3 JUMP JUMPDEST PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ SWAP1 POP PUSH2 0x1A1E JUMP JUMPDEST PUSH1 0x1 SWAP1 POP JUMPDEST SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 DUP3 EXTCODESIZE SWAP1 POP PUSH1 0x0 DUP2 GT SWAP2 POP POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1A4C PUSH2 0x1A47 DUP5 PUSH2 0x249C JUMP JUMPDEST PUSH2 0x2477 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH2 0x1A64 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x1A6F DUP5 DUP3 DUP6 PUSH2 0x2656 JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1A86 DUP2 PUSH2 0x2AC5 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1A9B DUP2 PUSH2 0x2ADC JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1AB0 DUP2 PUSH2 0x2AF3 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1AC5 DUP2 PUSH2 0x2B0A JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH2 0x1ADA DUP2 PUSH2 0x2B0A JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x1AF1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH2 0x1B01 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0x1A39 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1B19 DUP2 PUSH2 0x2B21 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1B31 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1B3F DUP5 DUP3 DUP6 ADD PUSH2 0x1A77 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x1B5B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1B69 DUP6 DUP3 DUP7 ADD PUSH2 0x1A77 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x1B7A DUP6 DUP3 DUP7 ADD PUSH2 0x1A77 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x1B99 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1BA7 DUP7 DUP3 DUP8 ADD PUSH2 0x1A77 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0x1BB8 DUP7 DUP3 DUP8 ADD PUSH2 0x1A77 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 PUSH2 0x1BC9 DUP7 DUP3 DUP8 ADD PUSH2 0x1B0A JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x80 DUP6 DUP8 SUB SLT ISZERO PUSH2 0x1BE9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1BF7 DUP8 DUP3 DUP9 ADD PUSH2 0x1A77 JUMP JUMPDEST SWAP5 POP POP PUSH1 0x20 PUSH2 0x1C08 DUP8 DUP3 DUP9 ADD PUSH2 0x1A77 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x40 PUSH2 0x1C19 DUP8 DUP3 DUP9 ADD PUSH2 0x1B0A JUMP JUMPDEST SWAP3 POP POP PUSH1 0x60 DUP6 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x1C36 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x1C42 DUP8 DUP3 DUP9 ADD PUSH2 0x1AE0 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP6 SWAP2 SWAP5 POP SWAP3 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x1C61 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1C6F DUP6 DUP3 DUP7 ADD PUSH2 0x1A77 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x1C80 DUP6 DUP3 DUP7 ADD PUSH2 0x1A8C JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x1C9D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1CAB DUP6 DUP3 DUP7 ADD PUSH2 0x1A77 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x1CBC DUP6 DUP3 DUP7 ADD PUSH2 0x1B0A JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x1CDB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1CE9 DUP7 DUP3 DUP8 ADD PUSH2 0x1A77 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0x1CFA DUP7 DUP3 DUP8 ADD PUSH2 0x1B0A JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x1D17 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x1D23 DUP7 DUP3 DUP8 ADD PUSH2 0x1AE0 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1D3F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1D4D DUP5 DUP3 DUP6 ADD PUSH2 0x1AA1 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x1D69 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1D77 DUP6 DUP3 DUP7 ADD PUSH2 0x1AA1 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 DUP4 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x1D94 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x1DA0 DUP6 DUP3 DUP7 ADD PUSH2 0x1AE0 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1DBC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1DCA DUP5 DUP3 DUP6 ADD PUSH2 0x1AB6 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1DE5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1DF3 DUP5 DUP3 DUP6 ADD PUSH2 0x1ACB JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1E0E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1E1C DUP5 DUP3 DUP6 ADD PUSH2 0x1B0A JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x1E2E DUP2 PUSH2 0x25CB JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x1E45 PUSH2 0x1E40 DUP3 PUSH2 0x25CB JUMP JUMPDEST PUSH2 0x2744 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x1E54 DUP2 PUSH2 0x25DD JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x1E63 DUP2 PUSH2 0x25E9 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x1E7A PUSH2 0x1E75 DUP3 PUSH2 0x25E9 JUMP JUMPDEST PUSH2 0x2756 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1E8B DUP3 PUSH2 0x24CD JUMP JUMPDEST PUSH2 0x1E95 DUP2 DUP6 PUSH2 0x24E3 JUMP JUMPDEST SWAP4 POP PUSH2 0x1EA5 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x2665 JUMP JUMPDEST PUSH2 0x1EAE DUP2 PUSH2 0x2869 JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1EC4 DUP3 PUSH2 0x24D8 JUMP JUMPDEST PUSH2 0x1ECE DUP2 DUP6 PUSH2 0x24F4 JUMP JUMPDEST SWAP4 POP PUSH2 0x1EDE DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x2665 JUMP JUMPDEST PUSH2 0x1EE7 DUP2 PUSH2 0x2869 JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1EFD DUP3 PUSH2 0x24D8 JUMP JUMPDEST PUSH2 0x1F07 DUP2 DUP6 PUSH2 0x2505 JUMP JUMPDEST SWAP4 POP PUSH2 0x1F17 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x2665 JUMP JUMPDEST DUP1 DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1F30 PUSH1 0x1C DUP4 PUSH2 0x2505 JUMP JUMPDEST SWAP2 POP PUSH2 0x1F3B DUP3 PUSH2 0x2887 JUMP JUMPDEST PUSH1 0x1C DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1F53 PUSH1 0x16 DUP4 PUSH2 0x24F4 JUMP JUMPDEST SWAP2 POP PUSH2 0x1F5E DUP3 PUSH2 0x28B0 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1F76 PUSH1 0x1C DUP4 PUSH2 0x24F4 JUMP JUMPDEST SWAP2 POP PUSH2 0x1F81 DUP3 PUSH2 0x28D9 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1F99 PUSH1 0x1E DUP4 PUSH2 0x24F4 JUMP JUMPDEST SWAP2 POP PUSH2 0x1FA4 DUP3 PUSH2 0x2902 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1FBC PUSH1 0x11 DUP4 PUSH2 0x24F4 JUMP JUMPDEST SWAP2 POP PUSH2 0x1FC7 DUP3 PUSH2 0x292B JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1FDF PUSH1 0x14 DUP4 PUSH2 0x24F4 JUMP JUMPDEST SWAP2 POP PUSH2 0x1FEA DUP3 PUSH2 0x2954 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2002 PUSH1 0x13 DUP4 PUSH2 0x24F4 JUMP JUMPDEST SWAP2 POP PUSH2 0x200D DUP3 PUSH2 0x297D JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2025 PUSH1 0x14 DUP4 PUSH2 0x24F4 JUMP JUMPDEST SWAP2 POP PUSH2 0x2030 DUP3 PUSH2 0x29A6 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2048 PUSH1 0xF DUP4 PUSH2 0x24F4 JUMP JUMPDEST SWAP2 POP PUSH2 0x2053 DUP3 PUSH2 0x29CF JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x206B PUSH1 0x14 DUP4 PUSH2 0x24F4 JUMP JUMPDEST SWAP2 POP PUSH2 0x2076 DUP3 PUSH2 0x29F8 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x208E PUSH1 0x12 DUP4 PUSH2 0x24F4 JUMP JUMPDEST SWAP2 POP PUSH2 0x2099 DUP3 PUSH2 0x2A21 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x20B1 PUSH1 0x18 DUP4 PUSH2 0x24F4 JUMP JUMPDEST SWAP2 POP PUSH2 0x20BC DUP3 PUSH2 0x2A4A JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x20D4 PUSH1 0x9 DUP4 PUSH2 0x24F4 JUMP JUMPDEST SWAP2 POP PUSH2 0x20DF DUP3 PUSH2 0x2A73 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x20F7 PUSH1 0xF DUP4 PUSH2 0x24F4 JUMP JUMPDEST SWAP2 POP PUSH2 0x2102 DUP3 PUSH2 0x2A9C JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x2116 DUP2 PUSH2 0x263F JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x212D PUSH2 0x2128 DUP3 PUSH2 0x263F JUMP JUMPDEST PUSH2 0x2772 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x213C DUP2 PUSH2 0x2649 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x214E DUP3 DUP6 PUSH2 0x1E34 JUMP JUMPDEST PUSH1 0x14 DUP3 ADD SWAP2 POP PUSH2 0x215E DUP3 DUP5 PUSH2 0x211C JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP2 POP DUP2 SWAP1 POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x217A DUP3 DUP6 PUSH2 0x1EF2 JUMP JUMPDEST SWAP2 POP PUSH2 0x2186 DUP3 DUP5 PUSH2 0x1EF2 JUMP JUMPDEST SWAP2 POP DUP2 SWAP1 POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x219D DUP3 PUSH2 0x1F23 JUMP JUMPDEST SWAP2 POP PUSH2 0x21A9 DUP3 DUP5 PUSH2 0x1E69 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP2 POP DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x21CD PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1E25 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x80 DUP3 ADD SWAP1 POP PUSH2 0x21E8 PUSH1 0x0 DUP4 ADD DUP8 PUSH2 0x1E25 JUMP JUMPDEST PUSH2 0x21F5 PUSH1 0x20 DUP4 ADD DUP7 PUSH2 0x1E25 JUMP JUMPDEST PUSH2 0x2202 PUSH1 0x40 DUP4 ADD DUP6 PUSH2 0x210D JUMP JUMPDEST DUP2 DUP2 SUB PUSH1 0x60 DUP4 ADD MSTORE PUSH2 0x2214 DUP2 DUP5 PUSH2 0x1E80 JUMP JUMPDEST SWAP1 POP SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x2234 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1E4B JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x224F PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1E5A JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x80 DUP3 ADD SWAP1 POP PUSH2 0x226A PUSH1 0x0 DUP4 ADD DUP8 PUSH2 0x1E5A JUMP JUMPDEST PUSH2 0x2277 PUSH1 0x20 DUP4 ADD DUP7 PUSH2 0x2133 JUMP JUMPDEST PUSH2 0x2284 PUSH1 0x40 DUP4 ADD DUP6 PUSH2 0x1E5A JUMP JUMPDEST PUSH2 0x2291 PUSH1 0x60 DUP4 ADD DUP5 PUSH2 0x1E5A JUMP JUMPDEST SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x22B4 DUP2 DUP5 PUSH2 0x1EB9 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x22D5 DUP2 PUSH2 0x1F46 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x22F5 DUP2 PUSH2 0x1F69 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x2315 DUP2 PUSH2 0x1F8C JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x2335 DUP2 PUSH2 0x1FAF JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x2355 DUP2 PUSH2 0x1FD2 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x2375 DUP2 PUSH2 0x1FF5 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x2395 DUP2 PUSH2 0x2018 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x23B5 DUP2 PUSH2 0x203B JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x23D5 DUP2 PUSH2 0x205E JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x23F5 DUP2 PUSH2 0x2081 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x2415 DUP2 PUSH2 0x20A4 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x2435 DUP2 PUSH2 0x20C7 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x2455 DUP2 PUSH2 0x20EA JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x2471 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x210D JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2481 PUSH2 0x2492 JUMP JUMPDEST SWAP1 POP PUSH2 0x248D DUP3 DUP3 PUSH2 0x26CA JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0x24B7 JUMPI PUSH2 0x24B6 PUSH2 0x283A JUMP JUMPDEST JUMPDEST PUSH2 0x24C0 DUP3 PUSH2 0x2869 JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x251B DUP3 PUSH2 0x263F JUMP JUMPDEST SWAP2 POP PUSH2 0x2526 DUP4 PUSH2 0x263F JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP3 GT ISZERO PUSH2 0x255B JUMPI PUSH2 0x255A PUSH2 0x27AD JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2571 DUP3 PUSH2 0x263F JUMP JUMPDEST SWAP2 POP PUSH2 0x257C DUP4 PUSH2 0x263F JUMP JUMPDEST SWAP3 POP DUP3 PUSH2 0x258C JUMPI PUSH2 0x258B PUSH2 0x27DC JUMP JUMPDEST JUMPDEST DUP3 DUP3 DIV SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x25A2 DUP3 PUSH2 0x263F JUMP JUMPDEST SWAP2 POP PUSH2 0x25AD DUP4 PUSH2 0x263F JUMP JUMPDEST SWAP3 POP DUP3 DUP3 LT ISZERO PUSH2 0x25C0 JUMPI PUSH2 0x25BF PUSH2 0x27AD JUMP JUMPDEST JUMPDEST DUP3 DUP3 SUB SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x25D6 DUP3 PUSH2 0x261F JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST DUP3 DUP2 DUP4 CALLDATACOPY PUSH1 0x0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x2683 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x2668 JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH2 0x2692 JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH2 0x26B0 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH2 0x26C4 JUMPI PUSH2 0x26C3 PUSH2 0x280B JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x26D3 DUP3 PUSH2 0x2869 JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH2 0x26F2 JUMPI PUSH2 0x26F1 PUSH2 0x283A JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2706 DUP3 PUSH2 0x263F JUMP JUMPDEST SWAP2 POP PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 EQ ISZERO PUSH2 0x2739 JUMPI PUSH2 0x2738 PUSH2 0x27AD JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x274F DUP3 PUSH2 0x2760 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x276B DUP3 PUSH2 0x287A JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2787 DUP3 PUSH2 0x263F JUMP JUMPDEST SWAP2 POP PUSH2 0x2792 DUP4 PUSH2 0x263F JUMP JUMPDEST SWAP3 POP DUP3 PUSH2 0x27A2 JUMPI PUSH2 0x27A1 PUSH2 0x27DC JUMP JUMPDEST JUMPDEST DUP3 DUP3 MOD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x60 SHL SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x19457468657265756D205369676E6564204D6573736167653A0A333200000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x6E6F74206F776E6572206E6F7220617070726F76656400000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x7472616E7366657220746F20746865207A65726F206164647265737300000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x6E6F74206F776E6572206E6F7220617070726F76656420666F7220616C6C0000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x496E76616C6964207369676E6174757265000000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x6D696E7420746F207A65726F2061646472657373000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x746F6B656E20646F65736E277420657869737400000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x6F776E6572203D207A65726F2061646472657373000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x546F6B656E204E6F742045786973740000000000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x746F6B656E20616C7265616479206D696E746564000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x6E6F742045524337323152656365697665720000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x696E76616C6964207369676E6174757265206C656E6774680000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x6E6F74206F776E65720000000000000000000000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x416C7265616479206D696E746564210000000000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH2 0x2ACE DUP2 PUSH2 0x25CB JUMP JUMPDEST DUP2 EQ PUSH2 0x2AD9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x2AE5 DUP2 PUSH2 0x25DD JUMP JUMPDEST DUP2 EQ PUSH2 0x2AF0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x2AFC DUP2 PUSH2 0x25E9 JUMP JUMPDEST DUP2 EQ PUSH2 0x2B07 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x2B13 DUP2 PUSH2 0x25F3 JUMP JUMPDEST DUP2 EQ PUSH2 0x2B1E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x2B2A DUP2 PUSH2 0x263F JUMP JUMPDEST DUP2 EQ PUSH2 0x2B35 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH15 0xC0169E18F4460A840A280B044137CC 0xC JUMPDEST 0xE7 0x2A 0xD5 SELFDESTRUCT 0xBD MSTORE8 0xE4 0x2E 0xDB GT LOG0 0xD1 0xE0 PUSH11 0x64736F6C63430008040033 ",
    "sourceMap": "1695:2295:0:-:0;;;1943:137;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2027:5;2034:7;1114:5:2;1107:4;:12;;;;;;;;;;;;:::i;:::-;;1138:7;1129:6;:16;;;;;;;;;;;;:::i;:::-;;1041:111;;2066:7:0::1;2057:16;;;;;;;;;;::::0;::::1;1943:137:::0;;;1695:2295;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:354:8:-;96:5;121:66;137:49;179:6;137:49;:::i;:::-;121:66;:::i;:::-;112:75;;210:6;203:5;196:21;248:4;241:5;237:16;286:3;277:6;272:3;268:16;265:25;262:2;;;303:1;300;293:12;262:2;316:39;348:6;343:3;338;316:39;:::i;:::-;102:259;;;;;;:::o;367:143::-;424:5;455:6;449:13;440:22;;471:33;498:5;471:33;:::i;:::-;430:80;;;;:::o;530:288::-;597:5;646:3;639:4;631:6;627:17;623:27;613:2;;664:1;661;654:12;613:2;697:6;691:13;722:90;808:3;800:6;793:4;785:6;781:17;722:90;:::i;:::-;713:99;;603:215;;;;;:::o;824:808::-;932:6;940;948;997:2;985:9;976:7;972:23;968:32;965:2;;;1013:1;1010;1003:12;965:2;1077:1;1066:9;1062:17;1056:24;1107:18;1099:6;1096:30;1093:2;;;1139:1;1136;1129:12;1093:2;1167:74;1233:7;1224:6;1213:9;1209:22;1167:74;:::i;:::-;1157:84;;1027:224;1311:2;1300:9;1296:18;1290:25;1342:18;1334:6;1331:30;1328:2;;;1374:1;1371;1364:12;1328:2;1402:74;1468:7;1459:6;1448:9;1444:22;1402:74;:::i;:::-;1392:84;;1261:225;1525:2;1551:64;1607:7;1598:6;1587:9;1583:22;1551:64;:::i;:::-;1541:74;;1496:129;955:677;;;;;:::o;1638:129::-;1672:6;1699:20;;:::i;:::-;1689:30;;1728:33;1756:4;1748:6;1728:33;:::i;:::-;1679:88;;;:::o;1773:75::-;1806:6;1839:2;1833:9;1823:19;;1813:35;:::o;1854:308::-;1916:4;2006:18;1998:6;1995:30;1992:2;;;2028:18;;:::i;:::-;1992:2;2066:29;2088:6;2066:29;:::i;:::-;2058:37;;2150:4;2144;2140:15;2132:23;;1921:241;;;:::o;2168:96::-;2205:7;2234:24;2252:5;2234:24;:::i;:::-;2223:35;;2213:51;;;:::o;2270:126::-;2307:7;2347:42;2340:5;2336:54;2325:65;;2315:81;;;:::o;2402:307::-;2470:1;2480:113;2494:6;2491:1;2488:13;2480:113;;;2579:1;2574:3;2570:11;2564:18;2560:1;2555:3;2551:11;2544:39;2516:2;2513:1;2509:10;2504:15;;2480:113;;;2611:6;2608:1;2605:13;2602:2;;;2691:1;2682:6;2677:3;2673:16;2666:27;2602:2;2451:258;;;;:::o;2715:320::-;2759:6;2796:1;2790:4;2786:12;2776:22;;2843:1;2837:4;2833:12;2864:18;2854:2;;2920:4;2912:6;2908:17;2898:27;;2854:2;2982;2974:6;2971:14;2951:18;2948:38;2945:2;;;3001:18;;:::i;:::-;2945:2;2766:269;;;;:::o;3041:281::-;3124:27;3146:4;3124:27;:::i;:::-;3116:6;3112:40;3254:6;3242:10;3239:22;3218:18;3206:10;3203:34;3200:62;3197:2;;;3265:18;;:::i;:::-;3197:2;3305:10;3301:2;3294:22;3084:238;;;:::o;3328:180::-;3376:77;3373:1;3366:88;3473:4;3470:1;3463:15;3497:4;3494:1;3487:15;3514:180;3562:77;3559:1;3552:88;3659:4;3656:1;3649:15;3683:4;3680:1;3673:15;3700:102;3741:6;3792:2;3788:7;3783:2;3776:5;3772:14;3768:28;3758:38;;3748:54;;;:::o;3808:122::-;3881:24;3899:5;3881:24;:::i;:::-;3874:5;3871:35;3861:2;;3920:1;3917;3910:12;3861:2;3851:79;:::o;1695:2295:0:-;;;;;;;;;;;;;"
};

// 1. 创建provider和wallet
// 准备 alchemy API 可以参考https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL04_Alchemy/readme.md
const ALCHEMY_GOERLI_URL = 'https://eth-goerli.alchemyapi.io/v2/GlaeWuylnNM3uuOo-SAwJxuwTdqHaY5l';
const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_GOERLI_URL);
// 利用私钥和provider创建wallet对象
const privateKey = '0x227dbb8586117d55284e26620bc76534dfbd2394be34cf4a09cb775d593b6f2b'
const wallet = new ethers.Wallet(privateKey, provider)

// 2. 根据allowlist地址和tokenId生成msgHash，并签名
console.log("\n1. 生成签名")
// 创建消息
const account = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
const tokenId = "0"
// 等效于Solidity中的keccak256(abi.encodePacked(account, tokenId))
const msgHash = utils.solidityKeccak256(
    ['address', 'uint256'],
    [account, tokenId])
console.log(`msgHash：${msgHash}`)

const main = async () => {
    // 签名
    const messageHashBytes = ethers.utils.arrayify(msgHash)
    const signature = await wallet.signMessage(messageHashBytes);
    console.log(`签名：${signature}`)

    // 3. 创建合约工厂
    // NFT的人类可读abi
    const abiNFT = [
        "constructor(string memory _name, string memory _symbol, address _signer)",
        "function name() view returns (string)",
        "function symbol() view returns (string)",
        "function mint(address _account, uint256 _tokenId, bytes memory _signature) external",
        "function ownerOf(uint256) view returns (address)",
        "function balanceOf(address) view returns (uint256)",
    ];
    // 合约字节码，在remix中，你可以在两个地方找到Bytecode
    // i. 部署面板的Bytecode按钮
    // ii. 文件面板artifact文件夹下与合约同名的json文件中
    // 里面"object"字段对应的数据就是Bytecode，挺长的，608060起始
    // "object": "608060405260646000553480156100...
    const bytecodeNFT = contractJson.default.object;
    const factoryNFT = new ethers.ContractFactory(abiNFT, bytecodeNFT, wallet);

    // 读取钱包内ETH余额
    const balanceETH = await wallet.getBalance()

    // 如果钱包ETH足够
    if(ethers.utils.formatEther(balanceETH) > 0.002){
        // 4. 利用contractFactory部署NFT合约
        console.log("\n2. 利用contractFactory部署NFT合约")
        // 部署合约，填入constructor的参数
        const contractNFT = await factoryNFT.deploy("WTF Signature", "WTF", wallet.address)
        console.log(`合约地址: ${contractNFT.address}`);
        // console.log("部署合约的交易详情")
        // console.log(contractNFT.deployTransaction)
        console.log("等待合约部署上链")
        await contractNFT.deployed()
        // 也可以用 contractNFT.deployTransaction.wait()
        console.log("合约已上链")

        // 5. 调用mint()函数，利用签名验证白名单，给account地址铸造NFT
        console.log("\n3. 调用mint()函数，利用签名验证白名单，给第一个地址铸造NFT")
        console.log(`NFT名称: ${await contractNFT.name()}`)
        console.log(`NFT代号: ${await contractNFT.symbol()}`)
        let tx = await contractNFT.mint(account, tokenId, signature)
        console.log("铸造中，等待交易上链")
        await tx.wait()
        console.log(`mint成功，地址${account} 的NFT余额: ${await contractNFT.balanceOf(account)}\n`)

    }else{
        // 如果ETH不足
        console.log("ETH不足，去水龙头领一些Goerli ETH")
        console.log("1. chainlink水龙头: https://faucets.chain.link/goerli")
        console.log("2. paradigm水龙头: https://faucet.paradigm.xyz/")
    }
}

main()
