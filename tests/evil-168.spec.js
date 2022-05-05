
  describe("some-evil-spec=168", () => {
    it("evil-block-168", () => {
      window.evil_168 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  