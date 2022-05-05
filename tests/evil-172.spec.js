
  describe("some-evil-spec=172", () => {
    it("evil-block-172", () => {
      window.evil_172 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  