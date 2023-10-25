<template>
    <div class="search-card">
        <div :style="{ display: 'flex' }">
            <a-card :style="{ width: '100%' }">
                <a-steps :current="2">
                    <a-step>等候接单</a-step>
                    <a-step>司机已接单</a-step>
                    <a-step>前往目的地</a-step>
                    <a-step>订单完成</a-step>
                </a-steps>
            </a-card>
        </div>
    </div>
</template>