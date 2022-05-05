
  describe("some-evil-spec=207", () => {
    it("evil-block-207", () => {
      window.evil_207 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  