
  describe("some-evil-spec=704", () => {
    it("evil-block-704", () => {
      window.evil_704 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  