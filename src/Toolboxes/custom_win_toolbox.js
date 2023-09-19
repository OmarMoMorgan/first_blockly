const toolbox = {
    'kind': 'categoryToolbox',
    'contents': [
        {
            'kind': 'category',
            'name': 'Logic',
            'categorystyle': 'logic_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'controls_if',
                },
                {
                    'kind': 'block',
                    'type': 'logic_compare',
                },
                {
                    'kind': 'block',
                    'type': 'logic_operation',
                },
                {
                    'kind': 'block',
                    'type': 'logic_negate',
                },
                {
                    'kind': 'block',
                    'type': 'logic_boolean',
                },
                {
                    'kind': 'block',
                    'type': 'logic_null',
                },
                {
                    'kind': 'block',
                    'type': 'logic_ternary',
                },
            ],
        },
        {
            'kind': 'category',
            'name': 'Math',
            'categorystyle': 'math_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'math_number',
                    'fields': {
                        'NUM': 123,
                    },
                },
                {
                    'kind': 'block',
                    'type': 'math_arithmetic',
                    'inputs': {
                        'A': {
                            'shadow': {
                                'type': 'math_number',
                                'fields': {
                                    'NUM': 1,
                                },
                            },
                        },
                        'B': {
                            'shadow': {
                                'type': 'math_number',
                                'fields': {
                                    'NUM': 1,
                                },
                            },
                        },
                    },
                },
                {
                    'kind': 'block',
                    'type': 'math_single_cst',
                    'inputs': {
                        'NUM': {
                            'shadow': {
                                'type': 'math_number',
                                'fields': {
                                    'NUM': 9,
                                },
                            },
                        },
                    },
                },
                {
                    'kind': 'block',
                    'type': 'math_trig_cst',
                    'inputs': {
                        'NUM': {
                            'shadow': {
                                'type': 'math_number',
                                'fields': {
                                    'NUM': 45,
                                },
                            },
                        },
                    },
                },
                {
                    'kind': 'block',
                    'type': 'math_constant_cst',
                },
                {
                    'kind': 'block',
                    'type': 'math_number_property',
                    'inputs': {
                        'NUMBER_TO_CHECK': {
                            'shadow': {
                                'type': 'math_number',
                                'fields': {
                                    'NUM': 0,
                                },
                            },
                        },
                    },
                },
                {
                    'kind': 'block',
                    'type': 'math_round_cst',
                    'fields': {
                        'OP': 'ROUND',
                    },
                    'inputs': {
                        'NUM': {
                            'shadow': {
                                'type': 'math_number',
                                'fields': {
                                    'NUM': 3.1,
                                },
                            },
                        },
                    },
                },
                {
                    'kind': 'block',
                    'type': 'math_modulo',
                    'inputs': {
                        'DIVIDEND': {
                            'shadow': {
                                'type': 'math_number',
                                'fields': {
                                    'NUM': 64,
                                },
                            },
                        },
                        'DIVISOR': {
                            'shadow': {
                                'type': 'math_number',
                                'fields': {
                                    'NUM': 10,
                                },
                            },
                        },
                    },
                },
            ],
        },
        {
            'kind': 'category',
            'name': 'Variables',
            'categorystyle': 'variable_category',
            'custom': 'VARIABLE',
        },
    ]
}


module.exports = { toolbox };