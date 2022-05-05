
  describe("some-evil-spec=253", () => {
    it("evil-block-253", () => {
      window.evil_253 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  