
  describe("some-evil-spec=302", () => {
    it("evil-block-302", () => {
      window.evil_302 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  