
  describe("some-evil-spec=389", () => {
    it("evil-block-389", () => {
      window.evil_389 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  