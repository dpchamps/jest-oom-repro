
  describe("some-evil-spec=766", () => {
    it("evil-block-766", () => {
      window.evil_766 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  