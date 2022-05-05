
  describe("some-evil-spec=735", () => {
    it("evil-block-735", () => {
      window.evil_735 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  