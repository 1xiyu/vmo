<template>
    <label :class="className" role="checkbox">
        <input type="checkbox"
                class="v-switch-input"
                @change.stop="toggle">
        <span class="v-switch-core"
                :style="coreStyle"
                :is-checked="isChecked"></span>
        <div v-if="labels">
            <span class="v-switch-label v-left" v-if="toggled">{{labelChecked}}</span>
            <span class="v-switch-label v-right" v-else>{{labelUnchecked}}</span>
        </div>
    </label>
</template>

<script>
    const DEF_CHECKED_COLOR = '#3462ff'
    const DEF_UNCHEKED_COLOR = '#eeeeee'
    const DEF_CHECKED_LABEL = 'on'
    const DEF_UNCHECKED_LABEL = 'off'

    import { contains } from '@/utils/mixin';

    export default {
        name: 'Switch',
        props: {
            value: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            color: {
                type: [String, Object],
                validator (value) {
                    return typeof value === 'object'
                        ? (value.checked || value.unchecked)
                        : typeof value === 'string'
                }
            },
            labels: {
                type: [Boolean, Object],
                default: false,
                validator (value) {
                    return typeof value === 'object'
                        ? (value.checked || value.unchecked)
                        : typeof value === 'boolean'
                }
            }
        },
        computed: {
            className () {
                let { toggled, disabled } = this;
                return [
                    'vue-js-switch',
                    { toggled, disabled }
                ]
            },

            isChecked () {
                return this.toggled.toString();
            },

            colorChecked () {
                if (typeof this.color !== 'object') {
                    return this.color || DEF_CHECKED_COLOR
                }

                return contains(this.color, 'checked')
                    ? this.color.checked
                    : DEF_CHECKED_COLOR
            },

            colorUnchecked () {
                return contains(this.color, 'unchecked')
                    ? this.color.unchecked
                    : DEF_UNCHEKED_COLOR
            },

            colorCurrent () {
                return this.toggled ? this.colorChecked : this.colorUnchecked
            },

            labelChecked () {
                return contains(this.labels, 'checked')
                    ? this.labels.checked
                    : DEF_CHECKED_LABEL
            },

            labelUnchecked () {
                return contains(this.labels, 'unchecked')
                    ? this.labels.unchecked
                    : DEF_UNCHECKED_LABEL
            },

            coreStyle () {
                return {
                    'background-color': this.colorCurrent
                }
            }
        },
        data () {
            return {
                toggled: this.value
            }
        },
        methods: {
            toggle (event) {
                this.toggled = !this.toggled;
                this.$emit('change', { value: this.toggled, srcEvent: event });
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height: 44px;
    $margin: 3px;

    .vue-js-switch {
        display: inline-block;
        position: relative;
        overflow: hidden;
        vertical-align: middle;
        user-select: none;
        font-size: 10px;
        cursor: pointer;
        .v-switch-input {
            display: none;
        }
        .v-switch-label {
            position: absolute;
            top: 0;
            font-weight: 600;
            color: white;

            &.v-left {
            left: 10px;
            }

            &.v-right {
            right: 10px;
            }
        }

        .v-switch-core {
            margin: 0;
            display: inline-block;
            position: relative;
            outline: 0;
            box-sizing: border-box;
            background: #bfcbd9;
            transition: border-color .3s, background-color .3s;
            user-select: none;
            &:before {
                display: block;
                position: absolute;
                overflow: hidden;
                top: 0;
                left: 0;
                z-index: 20;
                transform: translate($margin, $margin);
                transition: transform .3s;
                border-radius: 100%;
                background-color: #fff;
                content: '';
            }
        }
        &.toggled {
            .v-switch-core:before {
                transform: translate(30px, $margin);
                transform: translate(47px, $margin);
            }
        }
        &.disabled {
            pointer-events: none;
            cursor: not-allowed;
            opacity: 0.6;
        }
    }
    .vue-js-switch {
        line-height: 44px;
        height: 44px;
        .v-switch-label {
            line-height: 44px;
            height: 44px;
        }
        .v-switch-core {
            border-radius: 999px;
            width: 88px;
            height: 44px;
            &:before {
                width: calc(44px - 6px);
                height: calc(44px - 6px);
            }
        }
    }
</style>
