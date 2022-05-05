
  describe("some-evil-spec=881", () => {
    it("evil-block-881", () => {
      window.evil_881 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  