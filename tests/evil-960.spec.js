
  describe("some-evil-spec=960", () => {
    it("evil-block-960", () => {
      window.evil_960 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  