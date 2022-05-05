
  describe("some-evil-spec=408", () => {
    it("evil-block-408", () => {
      window.evil_408 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  