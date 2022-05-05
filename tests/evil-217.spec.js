
  describe("some-evil-spec=217", () => {
    it("evil-block-217", () => {
      window.evil_217 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  