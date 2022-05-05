
  describe("some-evil-spec=418", () => {
    it("evil-block-418", () => {
      window.evil_418 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  