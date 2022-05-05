
  describe("some-evil-spec=361", () => {
    it("evil-block-361", () => {
      window.evil_361 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  