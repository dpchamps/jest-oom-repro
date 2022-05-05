
  describe("some-evil-spec=475", () => {
    it("evil-block-475", () => {
      window.evil_475 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  