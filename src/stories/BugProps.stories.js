import BugProps from "./BugProps.vue";

export default {
  title: "BugProps",
  component: BugProps,

  args: {
    label: "The Label",
    title: "The Title",
  },
};

/**
 * Args get passed the the component regardless of using v-bind="args"
 */
const TemplateArgsAlwaysPassed = (args) => ({
  components: { BugProps },

  setup() {
    return { args };
  },

  template: `
    <BugProps/>
  `,
});

export const ArgsAlwaysPassed = TemplateArgsAlwaysPassed.bind({});
ArgsAlwaysPassed.args = {};

/**
 * Since args get passed all the time anyway, there is no method of overwriting some of them if necessary
 * In this case the manually defined label is ignored
 */
const TemplateOverwriteArgOnComponent = (args) => ({
  components: { BugProps },

  setup() {
    return { args };
  },

  template: `
    <BugProps
      v-bind="args"
      label="I really want to define the label here! But this does not work"
    />
  `,
});

export const OverwriteArgOnComponent = TemplateOverwriteArgOnComponent.bind({});
OverwriteArgOnComponent.args = {};

/**
 * Accordingly it's not possible to overwrite an arg in the setup method
 */
const TemplateOverwriteLabelInSetup = (args) => ({
  components: { BugProps },

  setup() {
    const updatedArgs = {
      ...args,
      label: "I want to overwrite the label in setup",
    };

    return { args: updatedArgs };
  },

  template: `
    <BugProps v-bind="args" />
  `,
});

export const OverwriteLabelInSetup = TemplateOverwriteLabelInSetup.bind({});
OverwriteLabelInSetup.args = {};

/**
 * I want to pass only a couple of args as props to the component but instead everything gets passed
 */
const TemplateOnlyPassSelectedArgs = (args) => ({
  components: { BugProps },

  setup() {
    return { args };
  },

  template: `
    <BugProps
      :title="args.title"
    >
      {{ args.label }}
    </BugProps>
  `,
});

export const OnlyPassSelectedArgs = TemplateOnlyPassSelectedArgs.bind({});
OnlyPassSelectedArgs.args = {};
