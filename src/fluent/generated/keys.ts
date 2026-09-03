import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '1189af5aa10e4158ac07e3dbe3834926'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'beb651f542c946f19db6948210a73679'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'bd805504f8a5430480fe530478108125'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '969108c11e504e178b6cc8b1913b03e7'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'fc0ad354beca46f6b0064a9192dbf80a'
                    }
                }
            }
        }
    }
}
