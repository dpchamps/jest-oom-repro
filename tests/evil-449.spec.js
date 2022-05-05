
  describe("some-evil-spec=449", () => {
    it("evil-block-449", () => {
      window.evil_449 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  