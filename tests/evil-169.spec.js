
  describe("some-evil-spec=169", () => {
    it("evil-block-169", () => {
      window.evil_169 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  