
  describe("some-evil-spec=441", () => {
    it("evil-block-441", () => {
      window.evil_441 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  