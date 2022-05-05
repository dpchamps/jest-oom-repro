
  describe("some-evil-spec=763", () => {
    it("evil-block-763", () => {
      window.evil_763 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  