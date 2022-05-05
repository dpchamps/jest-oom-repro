
  describe("some-evil-spec=546", () => {
    it("evil-block-546", () => {
      window.evil_546 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  