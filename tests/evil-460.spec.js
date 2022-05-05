
  describe("some-evil-spec=460", () => {
    it("evil-block-460", () => {
      window.evil_460 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  